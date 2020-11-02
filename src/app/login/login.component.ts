import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router) { }
  // title = "user name";
  // setElementUser=false;
  // setElementAdmin=false;
  errorMessage=false;
  // login=true;

  onClickButton($event){  
      $event.preventDefault();
     var username = (<HTMLInputElement>document.getElementById("username-field")).value;
     var password = (<HTMLInputElement>document.getElementById("password-field")).value;

     if(username==="user"){
      if(username==="user" && password==="password"){
        this.router.navigateByUrl('/loginpage');
       }else{
         this.errorMessage=true;
       }
     }
     
     if(username==="admin"){
      if(username==="admin" && password==="admin"){
        this.router.navigateByUrl('/admin');
       }else{
        this.errorMessage=true;
       }
     }
     
    // this.title = username;
    
  }
  
  
}
