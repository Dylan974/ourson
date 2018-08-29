import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ourson',
  templateUrl: './ourson.component.html',
  styleUrls: ['./ourson.component.css']
})
export class OursonComponent implements OnInit {
  isLinear = true;
  formGroup: FormGroup;
  secondFormGroup: FormGroup;

  private questions = {
    weather: ['good', 'bad'],
    time: ['morning', 'afternoon', 'night'],
    shape: ['fine', 'sad']
  };

  private questionsForm = this.questions;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.questions);
    this.formGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  weatherClick(event: any, answer: string) {
    console.log(event.type, answer);
    if (answer === 'good') {
      delete this.questionsForm.time;
    }
  }

  onSubmit() {
    console.log('submit', this.formGroup.value.firstCtrl);
  }

}
