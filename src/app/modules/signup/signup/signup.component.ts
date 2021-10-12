import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submit:any;
  data:any=[];
   resp:any;
  constructor( private fb: FormBuilder,private http:HttpClient) {
      this.submit=fb.group ({
        "email":new FormControl(null,[Validators.required,Validators.email]),
        "password":new FormControl(null,[Validators.required,Validators.minLength(6),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]),
        "conformPassword":new FormControl(null,Validators.required)
      },
      {
        validators:this.missMatchPassword('password','conformPassword')
      })

   }

  ngOnInit(): void {
  }
  get f (){return this.submit.controls}

  missMatchPassword(password:string,conformPs:string){
    return (formGroup:FormGroup)=>{
     const passwo=formGroup.controls[password]
     const cPasswo=formGroup.controls[conformPs]
     if(cPasswo.errors && !cPasswo.errors.missMatchPassword){
       return
     }
     if(passwo.value!==cPasswo.value){
      cPasswo.setErrors({missMatchPassword:true})
     }
     else{
      passwo.setErrors(null);
     }
    }
  }
  getEmailPassword(){
    if(this.submit.invalid){
      alert("all field filled mandatory")
    }
    else{
      let url="http://localhost:9095/signup";
      this.http.post<any>(url,this.submit.value).subscribe(response=>{
        this.resp=response;
        console.log(this.resp.data);
      })
    }
  }
  get email(){
    return this.submit.get('email');
  }
  get password(){
    return this.submit.get('password')
  }
  get conformPassword(){
    return this.submit.get('conformPassword')
  }
  
}
