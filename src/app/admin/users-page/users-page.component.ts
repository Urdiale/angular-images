import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
  constructor(private http: HttpClient) { }
  title = 'api-angular';
  dataImages = [{url:'teste', title: ''}];
  ngOnInit() {
    this.http
      .get<any>('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20')
      .subscribe(data => {
        this.dataImages = data.photos;
        console.log(this.dataImages);
      });
  }
}
