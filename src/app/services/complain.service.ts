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

  projectsCollection: AngularFirestoreCollection<Complain>;

  constructor() { }

  addProject(complain: Complain) {
    return this.projectsCollection.add(complain);
  }
}
