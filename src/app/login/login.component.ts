import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ValidationService]
})
export class LoginComponent implements OnInit {

  constructor(private validationService : ValidationService, private router : Router) {
  }

  ngOnInit(): void {
  }

  loginUser(event){
    event.preventDefault();
    const target = event.target;
    let username = target.querySelector("#username").value;
    let password = target.querySelector("#password").value;
    let isUserValid: boolean = this.validationService.validateCredentials(username, password);

    if(isUserValid){
      this.router.navigate(['mainpage']);
    }else{
      window.alert("Credentials Invalid !!");
    }     

  }

}
