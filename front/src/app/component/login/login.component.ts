import { HttpClient } from '@angular/common/http';
import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private http: HttpClient
    ) { }

    ngOnInit() {
        sessionStorage.setItem('token', '');
    }

    login() {
        this.http.post<Observable<boolean>>("localhost:9797/login", {
            username: this.model.username,
            password: this.model.password
        }).subscribe(isValid => {
            if (isValid) {
                sessionStorage.setItem(
                  'token', 
                  btoa(this.model.username + ':' + this.model.password)
                );
            this.router.navigate(['']);
            } else {
                alert("Authentication failed.")
            }
        });
    }
}
