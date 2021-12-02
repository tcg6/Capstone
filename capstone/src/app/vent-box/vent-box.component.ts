import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { Vent } from '../models/vent';
import { VentService } from '../services/vent.service';

@Component({
  selector: 'app-vent-box',
  templateUrl: './vent-box.component.html',
  styleUrls: ['./vent-box.component.css']
})
export class VentBoxComponent implements OnInit {
  public ventForm!: FormGroup;

  constructor(private fb: FormBuilder, private ventService: VentService) { 
    this.createForm();
  }

  @Input() user: User
 
  ngOnInit(): void {
  }

  createForm() {
    this.ventForm = this.fb.group({
      text: [null, [Validators.required, Validators.maxLength(300)] ]
    });
  }

  onSubmit() {
    this.ventService.postVent(new Vent({
      user: this.user,
      text: this.ventForm.get('text').value
    }))
  }

  lengthIsInvalid() {
    return this.ventForm.get('text').invalid &&
    (this.ventForm.get('text').dirty || this.ventForm.get('text').touched)
  }

}
