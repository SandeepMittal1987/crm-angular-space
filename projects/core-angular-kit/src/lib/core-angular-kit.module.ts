import { NgModule } from '@angular/core';
import { CoreAngularKitComponent } from './core-angular-kit.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { NgOtpInputModule } from 'ng-otp-input';

import { ButtonComponent } from './core/button/button.component';
import { HeaderComponent } from './models/widgets/header/header.component';
import { ExtendInputControlComponent } from './core/extend-input-control/extend-input-control.component';
import { InputBoxComponent } from './core/input-box/input-box.component';
import { StaticLabelComponent } from './core/static-label/static-label.component';
import { DropdownListComponent } from './core/dropdown-list/dropdown-list.component';
import { ImageComponent } from './core/image/image.component';
import { CheckboxComponent } from './core/checkbox/checkbox.component';
import { DynamicLabelComponent } from './core/dynamic-label/dynamic-label.component';
import { LinkComponent } from './core/link/link.component';
import { ForgotPasswordComponent, LoginPageComponent } from '../public-api';

@NgModule({
  declarations: [
    CoreAngularKitComponent,
    ButtonComponent,
    HeaderComponent,
    ExtendInputControlComponent,
    InputBoxComponent,
    StaticLabelComponent,
    DropdownListComponent,
    ImageComponent,
    CheckboxComponent,
    DynamicLabelComponent,
    LinkComponent,HeaderComponent, ForgotPasswordComponent, LoginPageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatInputModule,
    NgOtpInputModule,
  ],
  exports: [
    CoreAngularKitComponent,
    ButtonComponent,
    HeaderComponent,
    ExtendInputControlComponent,
    InputBoxComponent,
    StaticLabelComponent,
    DropdownListComponent,
    ImageComponent,
    CheckboxComponent,
    DynamicLabelComponent,
    LinkComponent, HeaderComponent, ForgotPasswordComponent, LoginPageComponent
  ]
})
export class CoreAngularKitModule { }
