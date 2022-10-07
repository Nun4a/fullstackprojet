import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  // constructor(private loginService: LoginService, private router: Router) {
  // }

  ngOnInit(): void {
  }


  connect(): void {
    // this.loginService.connect(this.form.value.username, this.form.value.password).subscribe(value => {
    //   this.router.navigate(["AdminComponent"])
    // });
  }

  @Input()
  error!: string | null;

  @Output() submitEM = new EventEmitter();
}
