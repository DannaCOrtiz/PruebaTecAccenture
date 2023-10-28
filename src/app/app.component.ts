import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-tec-accenture';
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.profileForm = this.formBuilder.group({
      firstName: ''
    });
  }
}
