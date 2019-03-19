import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteSegmentsEnum } from './core/enum/route-segments.enum';

const routes: Routes = [];

@NgModule({
  imports: [
      RouterModule.forRoot([
          {
              path: RouteSegmentsEnum.Welcome,
              data: { preload: true },
              loadChildren: './screen/screen.module'
          }
      ],
      { enableTracing: false,
        //preloadingStrategy: SelectiveStrategy,
      //   onSameUrlNavigation: 'reload'
      })
  ],
  providers: [  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
