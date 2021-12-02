import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Vent } from '../models/vent';
import { UserService } from '../services/user.service';
import { VentService } from '../services/vent.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public allVents: Observable<Vent[]>


  constructor(private ventService: VentService, public userService: UserService) { }

  ngOnInit(): void {
    //Subscribes to the logged in user
    this.userService.user$.subscribe();

    //Rretrieves all vents from the database
    this.allVents = this.ventService.getAllVents();
  }

}
