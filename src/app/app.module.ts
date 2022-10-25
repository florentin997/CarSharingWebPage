import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponentComponent } from './menu.component/menu.component.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ElementsComponent } from './elements/elements.component';
import { MainTableComponent } from './elements/main-table/main-table.component';
import { RidesComponent } from './elements/rides/rides.component';
import { PricesComponent } from './elements/prices/prices.component';
import { LocationsComponent } from './elements/locations/locations.component';
import { NewCarComponent } from './elements/new-car/new-car.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    MenuComponent,
    HeaderComponent,
    ElementsComponent,
    MainTableComponent,
    RidesComponent,
    PricesComponent,
    LocationsComponent,
    NewCarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
