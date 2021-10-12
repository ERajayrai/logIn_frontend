import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/survices/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getChannels('Programing').subscribe(data=>{
      console.log(data)
    })
  }

}
