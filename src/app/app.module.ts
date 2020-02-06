import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule,
   MatCardModule,
    MatButtonModule,
    MatToolbarModule
  } from '@angular/material';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {PostCreateComponent} from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header/header.component';
import { SidebarComponent } from './header/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
