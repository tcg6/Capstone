import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vent } from '../models/vent';

@Component({
  selector: 'app-vent-list',
  templateUrl: './vent-list.component.html',
  styleUrls: ['./vent-list.component.css']
})
export class VentListComponent implements OnInit {

  @Input() ventList: Observable<Vent[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
