import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RegisterPayload} from '../register-payload';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerPayload: RegisterPayload;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: ''
    });
    this.registerPayload = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: ''
    };

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.registerPayload.email = this.registerForm.get('email').value;
    this.registerPayload.username = this.registerForm.get('username').value;
    this.registerPayload.password = this.registerForm.get('password').value;
    this.registerPayload.confirmPassword = this.registerForm.get('confirmPassword').value;
    this.registerPayload.firstName = this.registerForm.get('firstName').value;
    this.registerPayload.lastName = this.registerForm.get('lastName').value;

    this.authService.register(this.registerPayload).subscribe(data => {
      console.log('register success');
      this.router.navigateByUrl('/register-success');

    }, error => {
      console.log('you miss something');
    });

  }
}
