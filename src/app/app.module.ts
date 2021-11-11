import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { ReverseAuthGuard } from './_core/auth/services/reverse.auth.guard';
import { AuthService } from '../app/_core/auth/services/auth.service';
import { httpInterceptor } from './_core/auth/services/httpinterceptor';
import { ErrorInterceptor } from './_core/auth/services/errorInterceptor';
import { PagesModule } from './_view/pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    PagesModule,
    ToastrModule.forRoot({timeOut: 3500}),
  ],
  providers: [AuthService,ReverseAuthGuard,
   {provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true},
   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
