import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, Subject, ReplaySubject ,of, observable} from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators'; 

import { UserDTO } from '../model/UserDTO';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getLogin( user: string, password: string):any {
    return of({ userId: 1,
      username : "Admin",
      idProfile : 100,
       nameProfile:"Administrador" })
  }


}
