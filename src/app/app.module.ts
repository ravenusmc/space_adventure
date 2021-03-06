import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { SpaceComponent } from './space/space.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    AsideComponent,
    AboutComponent,
    FooterComponent,
    SpaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
