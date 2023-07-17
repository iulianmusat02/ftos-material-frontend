import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Renderer2, RendererFactory2 } from '@angular/core';

@Component({
  selector: 'app-homepage-user-interface',
  templateUrl: './homepage-user-interface.component.html',
  styleUrls: ['./homepage-user-interface.component.scss']
})
export class HomepageUserInterfaceComponent implements OnInit{

  constructor(private http:HttpClient, private renderer: Renderer2){}
  public components: any = [];

  ngOnInit(): void {
    console.log('here')
    this.getHomepageComponent();
  }
  
  public getHomepageComponent() {
    const url = "http://localhost:3000/getUIComponents";
    this.http.post(url, {componentType: 'homepage'}).pipe(tap((res : any) => {
      this.components = res;
      this.components.forEach((element: any) => {
        const styleElement = this.renderer.createElement('style');
        this.renderer.appendChild(styleElement, this.renderer.createText(element.css));
        this.renderer.appendChild(document.head, styleElement);
      });
      console.log(this.components)
    })).subscribe();
  }
  public deleteComponent(arg: any) {
    console.log(arg);
    const url = "http://localhost:3000/deleteUIComponent";
    this.http.post(url, {uicomponentsId : arg}).pipe(tap((res) => {
      this.getHomepageComponent();
    })).subscribe();
  }


}
