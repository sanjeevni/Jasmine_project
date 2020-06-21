import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  isUserLoggedIn = false;

  constructor() { }

   validateCredentials(username: string, password: string){

    if(username==="admin1234" && password==="12345678"){
      debugger;
      this.isUserLoggedIn = true;
    }   
    return this.isUserLoggedIn;
  }

}
