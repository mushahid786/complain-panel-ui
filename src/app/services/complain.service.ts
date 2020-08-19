import { Injectable } from '@angular/core';
import { Complain } from '../model/complain';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  complainCollection: AngularFirestoreCollection<Complain>;

  constructor(public firestore: AngularFirestore) {
    this.complainCollection = this.firestore.collection(
      "complainCollection"
    );
  }

  addProject(complain: Complain) {
    return this.complainCollection.add(complain);
  }
}
