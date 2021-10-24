import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.allVents = this.ventService.getAllVents();
  }

}
