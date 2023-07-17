import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-insert-ui-component',
  templateUrl: './insert-ui-component.component.html',
  styleUrls: ['./insert-ui-component.component.scss']
})
export class InsertUiComponentComponent {
  constructor(private http:HttpClient) {
  }
  public insertObj = {
    html : '',
    css : '',
    createdBy : '',
    componentType : ''
  };

  public submit() {
    console.log('press')
    this.insertUIComponent(this.insertObj).pipe(tap((response) => {
      console.log(response);
    })
    ).subscribe();
  }

  public insertUIComponent(body: {}) {
    const url = "http://localhost:3000/insertUIComponent";
    return this.http.post(url, body);
  }
}
