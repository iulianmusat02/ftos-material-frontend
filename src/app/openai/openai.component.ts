import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-openai',
  templateUrl: './openai.component.html',
  styleUrls: ['./openai.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OpenaiComponent implements OnInit{
  constructor(private http: HttpClient, private doms : DomSanitizer) {
  }
  safeHtml : SafeHtml = '';
  cssOpenAIResponse : string = '';
  htmlOpenAIResponse : SafeHtml = '';
  cssOpenAIRequest : string = '';
  htmlOpenAIRequest : string = '';

  isLoading : boolean = false;

  ngOnInit(): void {
  }
  createStyle (arg : any) {
    const css = arg;
    const head = document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
  }
  generateHTML(){
    this.isLoading = true;
    let arg;
    if(this.htmlOpenAIResponse == '') {
      arg = 'Generate html: ' + this.htmlOpenAIRequest + " Note:(reply with body html only and do not include any css)";
    } else {
      arg = 'Update this html: ' + this.htmlOpenAIResponse + ' so ' + this.htmlOpenAIRequest + " Note:(reply with body html only and do not include any css)";
    }
    
    console.log(arg)
    this.callOpenAI(arg).pipe(
      tap((response) => {
        this.isLoading = false;
        this.safeHtml = this.doms.bypassSecurityTrustHtml(response[0].message.content);
        this.htmlOpenAIResponse = this.safeHtml;
        // console.log(this.htmlOpenAIResponse)
      })
    ).subscribe();
  }
  generateCSS() {
    this.isLoading = true;
    let arg;
    if(this.cssOpenAIResponse == '') {
      arg = 'Generate css to this html: ' + this.htmlOpenAIResponse + " so " + this.cssOpenAIRequest
    } else {
      arg = 'Update this css: ' + this.cssOpenAIResponse + " to this html: " + this.htmlOpenAIResponse + " so " + this.cssOpenAIRequest + " Note:(reply with css only and do not include anything else)";
    }
    console.log(arg);
    this.callOpenAI(arg).pipe(
      tap((response) => {
        this.isLoading = false;
        console.log(response[0].message.content)
        this.createStyle(response[0].message.content)
        this.cssOpenAIResponse = this.cssOpenAIResponse + response[0].message.content;
      })
    ).subscribe();
  }
  callOpenAI(arg : string){
    const url = 'http://localhost:3000/openai/chat';
    const body = {
      message : arg,
     }
    return this.http.post<any>(url, body);
  }
}
