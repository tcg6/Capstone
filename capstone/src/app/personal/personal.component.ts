import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vent } from '../models/vent';
import { UserService } from '../services/user.service';
import { VentService } from '../services/vent.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor(private ventService: VentService, public userService: UserService) { }

  public personalVents: Observable<Vent[]>

  ngOnInit(): void {
    this.userService.user$.subscribe( user => {
      this.personalVents = this.ventService.getVentsByUid(user.uid);
    });
  }

}
