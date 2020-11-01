import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  title = "user name";
  setElementUser=false;
  setElementAdmin=false;
  login=true;

  onClickButton($event){  
      $event.preventDefault();
     var username = (<HTMLInputElement>document.getElementById("username-field")).value;
     var password = (<HTMLInputElement>document.getElementById("password-field")).value;

     if(username==="user" && password==="password"){
      this.setElementUser=true;
      this.login=false;
     }

     if(username==="admin" && password==="admin"){
      console.log("click event");
      this.setElementAdmin=true;
      this.login=false;
     }
    // this.title = username;
    
  }

  


}
