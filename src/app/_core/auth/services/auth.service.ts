import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
 
  private isLoadingSubject: BehaviorSubject<any>;
  public isLoading: Observable<any>;
  authHttpService: any;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.isLoadingSubject = new BehaviorSubject<any>((localStorage.getItem('token')));
    this.isLoading = this.isLoadingSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.isLoadingSubject.value;
  }

  verifyLogin(data: any) {
    var headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<any>(`${environment.baseUrl}api/auth/signIn`, data, headers)
      .pipe(map(user => {
        const token = user.token;
        this.isLoadingSubject.next(user);
        return user;
      }));
  }

  logout() {
    // localStorage.removeItem(this.authLocalStorageToken);
    // this.router.navigate(['/auth/login'], {
    //   queryParams: {},
    // });
  }

  
   forgotPassword(email: string) {
    this.isLoadingSubject.next(true);
    return this.authHttpService
      .forgotPassword(email)
      .pipe(finalize(() => this.isLoadingSubject.next(false)));
   }


}
