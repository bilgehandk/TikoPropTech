import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { PropertyListComponent } from './property-list.component';
import { PropertyDetailsComponent } from './property-details.component';
import { PropertyManagementModule } from './property-management.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CurrencyPipe } from "@angular/common";
import { PropertyManagementComponent } from './property-management.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'property-list', component: PropertyListComponent },
  { path: 'property-management', component: PropertyManagementComponent },
  { path: 'property-management/:id', component: PropertyManagementComponent },
  { path: 'property-details/:id', component: PropertyDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertyListComponent,
    PropertyDetailsComponent,
    PropertyManagementComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PropertyManagementModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
