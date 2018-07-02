import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CalsService} from '../../services/cals.service';
import {Router} from '@angular/router';
import {Calenda} from '../../models/Calenda.model';

@Component({
  selector: 'app-cal-form',
  templateUrl: './cal-form.component.html',
  styleUrls: ['./cal-form.component.scss']
})
export class CalFormComponent implements OnInit {

  calForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private calsService: CalsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.calForm = this.formBuilder.group({
      couleur: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSaveEvent() {
    const couleur = this.calForm.get('couleur').value;
    const date = this.calForm.get('date').value;
    const description = this.calForm.get('description').value;
    const newCalenda = new Calenda(couleur, date, description);
    this.calsService.createNewEvent(newCalenda);
    this.router.navigate(['/calenda']);
  }



}
