import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  title = 'y';
  mData: any[] = [];

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit(): void {
    this.getvalut();
  }

  onSubmit(feedbackData){
    // alert(JSON.stringify(feedbackData));
    let data = {isbn: feedbackData.isbn , title : feedbackData.title, price: feedbackData.price};
    this.http.post<any>('http://localhost:3000/api',data).subscribe(result =>{
     alert(JSON.stringify(result));
     this.getvalut();
    });
  }

  getvalut(){
    this.http.get<any>('http://localhost:3000/api/get').subscribe(result => {
      // alert(JSON.stringify(result));
      this.mData = result.data;
    });
  }

  getvaluebyid(id){
    this.http.get<any>(`http://localhost:3000/api/get/${id}`).subscribe(result =>{
      alert(JSON.stringify(result));
      // this.mData = result.data;
    });
  }

  delvalue(id){
    this.http.delete<any>(`http://localhost:3000/api/del/${id}`).subscribe(result => {
      alert(JSON.stringify(result));
      this.getvalut();
    });
  }

  updatevalue(id,feedbackData){
    let data = {isbn: feedbackData.isbn , title : feedbackData.title, price: feedbackData.price};
    this.http.put<any>(`http://localhost:3000/api/update/${id}`,data).subscribe(result => {
      alert(JSON.stringify(result));
    });
  }
}
