import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Renderer2, RendererFactory2 } from '@angular/core';

@Component({
  selector: 'app-edit-ui-component',
  templateUrl: './edit-ui-component.component.html',
  styleUrls: ['./edit-ui-component.component.scss']
})
export class EditUiComponentComponent implements OnInit{
  public component = {
    html : "",
    css : "",
    uicomponentsId : '',
  };

  constructor(private route: ActivatedRoute, private http: HttpClient, private renderer : Renderer2) {
    this.component.uicomponentsId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getComponent().pipe(tap((res: any) => {
      console.log(res[0])
      this.component.html = res[0].html;
      this.component.css = res[0].css;

      const styleElement = this.renderer.createElement('style');
      this.renderer.appendChild(styleElement, this.renderer.createText(res[0].css));
      this.renderer.appendChild(document.head, styleElement);
      console.log(this.component);
    })).subscribe();  
  }

  public updateComponent() {
    console.log(this.component);
    const url = 'http://localhost:3000/updateUIComponent';
    this.http.post(url, this.component).pipe(tap((res) => {
      console.log(res);
    })).subscribe();
   }

  private getComponent() {
    const url = 'http://localhost:3000/getUIComponent?uiComponentId=' + this.component.uicomponentsId;
    return this.http.get(url);
  }
}
