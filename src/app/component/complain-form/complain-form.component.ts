import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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
      name: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      pinCode: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
      problem: new FormControl('', Validators.required),
      product: new FormControl('', Validators.required),
      modalNumber: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      complainDate: new FormControl('', Validators.required),

    });
  }

  selectedItem(event) {
    console.log("Tesssssss", event);

  }

  async submit(form) {

    // if (!(form.value.name) || !(form.value.phoneNumber) || !(form.value.email) || !(form.value.state) || !(form.value.district) || !(form.value.pinCode) || !(form.value.address) ||
    //   !(form.value.productName) || !(form.value.product) || !(form.value.modalNumber) || !(form.value.serialNumber) || !(form.value.description) || !form.complainDate) {
    //   console.log("Tested");

    //   return true
    // }
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
