import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService{

    constructor(private http: HttpClient) {}

    registerUser(userData: any): Observable<any> {
        return this.http.post('http://localhost:3001/api/users/register', userData, {
            headers: {
            'Content-Type': 'application/json' // Ajoutez ce header si l'API attend du JSON           
            }
        });
    }

    loginUser(email: string, password: string): Observable<any> {

        const url = 'http://localhost:3001/api/users/login-user';   
        const body = { email: email, password: password };
          
        return this.http.post<any>(url, body).pipe( 
        catchError((error) => {
            console.error('Error during login:', error);
            return throwError('Login failed. Please try again.');   
        }));    
    }

}