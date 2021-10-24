import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Vent } from '../models/vent';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VentService {

  constructor(private afs: AngularFirestore) { }

  getAllVents(): Observable<Vent[]> {
    return this.afs
    .collection('vents', ref => ref.orderBy('text', 'desc'))
    .valueChanges().pipe(
      map(vents => vents.map( ventObj => new Vent(ventObj) ))
    );
  }

  public postVent(vent: Vent): void {
    this.afs.collection('vents').add({
      text: vent.text
    })
  }
}
