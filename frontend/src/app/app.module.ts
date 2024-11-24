import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from './components/slider/slider.component';
import { MarqueComponent } from './components/marque/marque.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SellerComponent } from './components/seller/seller.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { PopupComponent } from './components/popup/popup.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LookbookComponent } from './components/lookbook/lookbook.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    SliderComponent,
    MarqueComponent,
    CategoriesComponent,
    SellerComponent,
    SearchComponent,
    CartComponent,
    PopupComponent,
    TopBarComponent,
    LookbookComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
