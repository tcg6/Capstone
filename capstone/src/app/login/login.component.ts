import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';
import { VentService } from '../services/vent.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private userSubscription: Subscription

  constructor(public userService: UserService, private ventService: VentService, private router: Router) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe(user => {
      if(user){
        this.router.navigate(['login'])
      }
    })
  }

  ngOnDestroy() {
    //Unsubscribes if template is destroyed
    this.userSubscription.unsubscribe()
  }

  

}
