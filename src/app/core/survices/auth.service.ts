import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuard } from './auth.guard';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public router: Router | undefined
  constructor(private snackbaarService:SnackbarService,private http:HttpClient) { }
  getLogedIn(emalPassword:Object){
    let url="http://localhost:9095/login";
      this.http.post<any>(url,emalPassword).subscribe(response=>{
        if(response.data.valid==true){
          this.snackbaarService.openSnackBar("valid user",'ok')
          this.router?.navigate(['/homepage'])
        }else{
          this.snackbaarService.openSnackBar("Your are not valid user,please signup first","dissmiss")
        }
        return response;
        
      })
  }
  getChannels(channelName:string):Observable<any>{
    const ApiKey="AIzaSyA2gvFHWWYwIr_CFCkjF8_tiH8-A9WtCBg"
    const url= "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+channelName+"&type=channel&key"+ApiKey+"&maxResult=50"
    return this.http.get<any>(url);
  }
}

