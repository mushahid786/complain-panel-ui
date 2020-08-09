import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

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
      itemId: new FormControl(""),
      modalNumber: new FormControl(""),
      serialNumber: new FormControl(""),
      description: new FormControl(""),
      complainDate: new FormControl(""),

    });
  }

  selectedItem(value) {
    console.log("Tesssssss", value);

  }
}
