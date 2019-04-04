import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  title = 'y';
    mData:any[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getvalut();
  }

  onSubmit(feedbackData){
    // alert(JSON.stringify(feedbackData));
    let data = {username : feedbackData.username , feedback : feedbackData.feedback};
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
}
