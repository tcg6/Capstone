import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vent } from '../models/vent';
import { VentService } from '../vent.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public allVents!: Observable<Vent[]>

  constructor(private ventService: VentService) { }

  ngOnInit(): void {
    this.allVents = this.ventService.getAllVents();
  }

}
