import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ForgotPasswordComponent} from '../forgot-password/forgot-password.component'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  returnUrl: string;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) { }


  showSuccess() {
    this.toastr.success('Registration Successfully Done');
  }
  showError() {
    this.toastr.error('Somthing went wrong');
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',Validators.compose([Validators.required, Validators.email])],
      password: ['',Validators.compose([Validators.required])]
    });

    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const loginSubscr = this.authService.verifyLogin(this.loginForm.value).subscribe(res => {
        localStorage.setItem('token', (res.token));
        this.router.navigate(['/dashboard']);
        this.showSuccess();
      },error => {
        const msg= error.Message;
        console.log(msg);
        this.showError();
    });
  }

  openForgetPassword() {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, { });
    dialogRef.afterClosed().subscribe(res => {
      
    });
  }

  
}
