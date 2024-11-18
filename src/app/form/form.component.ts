import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userData : any;
  constructor (
    private store : Store
  ){

  }

  onUpdate(form: any) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      this.store.dispatch({type:'user-edit', payload:form.value})
      // this.store.dispatch({type:'email-edit', payload:form.value.email})
      // this.store.dispatch({type:'mobile-edit', payload:form.value.mobile})

    } else {
      alert('Please fill out the form correctly.');
    }
  }

}
