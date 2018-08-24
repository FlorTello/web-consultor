import { Component, OnInit } from '@angular/core';
import { UserDTO } from "../model/UserDTO";

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup

  constructor(private bf: FormBuilder, private loginService: LoginService,
    private router: Router
  ) {

  }

  title = "Web Consultor";
  private user: UserDTO = new UserDTO();


  ngOnInit() {
    this.formLogin = this.bf.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(event, username, password) {
    event.preventDefault();

    // this.securityService.Login('1111', '2222').subscribe(data => {
    //     this.appGlobal.setValue('hamilton');
    //     this.router.navigateByUrl('/home');
    // });
  }


  onClicLogOn() {
    console.log(this.formLogin);
    const vUser = this.formLogin.controls["username"].value;
    const vPassword = this.formLogin.controls["password"].value;

    this.loginService.getLogin(vUser, vPassword).subscribe(user => {
      if (!!user.userId) {
        this.router.navigate(['/profile'])
      }
    },
      error => {
        console.log("Error");
      }
    )

  }

}
