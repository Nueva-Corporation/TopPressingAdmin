import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup
  constructor(private fb : FormBuilder, private route : Router) { }

  ngOnInit(): void {
  }
  initForm(){
    this.registerForm = this.fb.group({
      email : ['', Validators.required],
      userName : ['', Validators.required],
      password : ['', Validators.required]
    })
  }
  onSubmitForm(){
    const formValue = this.registerForm.value
    }
  
  onClick(){
    this.route.navigate(['/login'])
  }
}
