import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// custom module section
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// custom components import section
import { UserCmpComponent } from './user-cmp/user-cmp.component';

// custom services import section
import { UserServiceService} from './user-service.service';

// Route for the different pages
const ROUTES: Route[] = [
  { path: 'users', component: UserCmpComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UserCmpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
