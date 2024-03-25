import { APP_INITIALIZER, ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { CoreAngularKitModule } from 'core-angular-kit';
import { HTTP_INTERCEPTORS, HttpBackend, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './core/interceptors/auth-interceptor.service';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { ConfigService } from './core/services/util-service.service';
import { DatePipe, registerLocaleData } from '@angular/common';
import * as locale_en from '@angular/common/locales/en';
import { AppConfigService } from './core/services/app-config.service';
import { AppErrorHandlerService } from './core/services/app-error-handler/app-error-handler.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgOtpInputModule } from 'ng-otp-input';

export function HttpLoaderFactory(http:HttpBackend): MultiTranslateHttpLoader {
  return new MultiTranslateHttpLoader(http, [{
    prefix: './assets/locales/',suffix: '.json'
  },])
}

export function getCulture(utilService : ConfigService){
  let locale_id: string='';
  switch(utilService.getLocaleId()){
    case 'en':
      locale_id = 'en-US';
      registerLocaleData(locale_en,locale_id);
      break;
    default:
      break;
  }
  return locale_id;
}

export function appInit(appConfigService:AppConfigService):any{
  return () => appConfigService.load();
}

@NgModule({
  declarations: [			
    AppComponent,
      LoginComponent,
      DashboardComponent,
      LayoutComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    NgOtpInputModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend]
      }
    }),
    CoreAngularKitModule
  ],
  providers: [
    DatePipe,
    {provide:HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    {provide: APP_INITIALIZER, useFactory: appInit, multi: true, deps: [AppConfigService]},
    // {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: ErrorHandler, useClass: AppErrorHandlerService},
    {provide: LOCALE_ID, deps: [ConfigService], useFactory:getCulture},
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
