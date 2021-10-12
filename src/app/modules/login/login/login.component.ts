import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/survices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submit:any;
  data:any=[];
   resp:any;
  constructor(private http:HttpClient,private authService:AuthService) { 
    this.submit=new FormGroup({
      "email":new FormControl(null,[Validators.required,Validators.email]),
      "password":new FormControl(null,[Validators.required])
    })
  }

  ngOnInit(): void {
  }
  getEmailPassword(){
    if(this.submit.invalid){
      alert("email and password is required");
    }
    else{
      this.authService.getLogedIn(this.submit.value)
      this.submit.resate();
    }
  }

  get email(){
    return this.submit.get('email');
  }
  get password(){
    return this.submit.get('password');
  }

}
