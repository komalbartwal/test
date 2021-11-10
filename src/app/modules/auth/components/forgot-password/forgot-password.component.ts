import { Component, OnInit,ElementRef, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  submitted:boolean=false;

  constructor(public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
     private fb: FormBuilder,private toastr: ToastrService,
     private authService: AuthService) {
  }

  ngOnInit(): void {
    this.forgotPasswordForm=this.fb.group({
      email: ['',Validators.compose([Validators.required, Validators.email])]
    })
  }

  get f() {
    return this.forgotPasswordForm.controls;
  }

  submit() {
    this.submitted=true;
    if(this.forgotPasswordForm.invalid){
      this.forgotPasswordForm.markAllAsTouched();
      return
    }
    
  }
}
