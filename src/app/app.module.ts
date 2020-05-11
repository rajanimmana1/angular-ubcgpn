import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './user/user.service';
import { CoreModule } from './core/core.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CoreModule ],
  declarations: [ AppComponent, HelloComponent, UserComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserService]
})
export class AppModule { }
