import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ComplainService } from 'src/app/services/complain.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-complain-form',
  templateUrl: './complain-form.component.html',
  styleUrls: ['./complain-form.component.scss']
})
export class ComplainFormComponent implements OnInit {


  productsName = [
    { id: "LG" },
    { id: "Samsung" },
    { id: "Westway" },
    { id: "Haier" },
    { id: "Warsi Cooler" },
  ]

  products = [
    { id: "LED" },
    { id: "Washing Machine" },
    { id: "Refreigerator" },
    { id: "Cooler Problem" }
  ]

  constructor(private fb: FormBuilder, public projectService: ComplainService,
    public router: Router, public spinner: NgxSpinnerService) { }

  myForm: FormGroup;
  bsConfigGlobal = {
    dateInputFormat: "DD/MM/YYYY",
    showWeekNumbers: false,
    containerClass: "theme-default"
  };
  minDate: Date;

  ngOnInit(): void {

    this.myForm = this.fb.group({
      name: new FormControl(""),
      phoneNumber: new FormControl(""),
      email: new FormControl(""),
      state: new FormControl(""),
      district: new FormControl(""),
      pinCode: new FormControl(""),
      address: new FormControl(""),
      productName: new FormControl(""),
      product: new FormControl(""),
      modalNumber: new FormControl(""),
      serialNumber: new FormControl(""),
      description: new FormControl(""),
      complainDate: new FormControl(""),

    });
  }

  selectedItem(event) {
    console.log("Tesssssss", event);

  }

  async submit(form) {

    this.spinner.show();
    let docRef = await this.projectService.addProject(form.value).then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);

    })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    this.spinner.hide()
    this.router.navigate([`/success`]);
  }
}
