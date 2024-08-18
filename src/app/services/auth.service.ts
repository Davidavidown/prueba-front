import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUserRequest } from '../models/create-user-request.interface';
import {Observable} from 'rxjs'
import { CreateUserResponse } from '../models/create-user-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  crearUsuario( request: CreateUserRequest):Observable<CreateUserResponse>{
    return this.httpClient.post<CreateUserResponse>(`${this.apiUrl}nuevo-usuario`, request)
  }
}
