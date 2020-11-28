import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup
  constructor(private fb : FormBuilder, private route : Router) {}

  ngOnInit(): void {
  }

  initForm(){
    this.loginForm = this.fb.group({
      userName : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  onSubmitForm(){
    const formValue = this.loginForm.value
  }

  onClick(){
    this.route.navigate(['/register'])
  }
}
