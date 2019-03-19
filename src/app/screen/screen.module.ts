import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { ScreenComponent } from './screen.component';
import { ScreenRoutingModule } from './screen-routing.module';

@NgModule({
  declarations: [WelcomeComponent, ScreenComponent],
  imports: [
    CommonModule, ScreenRoutingModule
  ]
})
export class ScreenModule { }
