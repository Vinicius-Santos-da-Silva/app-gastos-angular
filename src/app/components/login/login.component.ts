import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email = new FormControl('');

  password = new FormControl('');

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {})
  }

  onSave()
  {

    alert('indo')

    const url = "http://jwt2.localhost/user/login";
    
    const basic = btoa( 'testclient:testsecret');

    const headers = { 
      'Authorization': 'Basic '+basic, 
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    };

    const body = {
      grant_type:"password",
      email:this.email.value,
      password:this.password.value
    }

    console.log(basic);
    console.log(body);
    console.log(headers);
    alert('indo2')

    this.http.post<any>(url, body, { headers }).subscribe({
      next: data => {
        alert('next')
      },
      error: error => {

        alert('next')

        console.error('There was an error!', error);
      }
    });

  }

}
