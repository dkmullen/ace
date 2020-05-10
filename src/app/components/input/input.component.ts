import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() type: string;
  @Input() control: FormControl;
  @Input() placeholder: string;

  showErrors() {
    // console.log(this.control)
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }

}
