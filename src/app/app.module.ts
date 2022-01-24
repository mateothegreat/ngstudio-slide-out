import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { SlideOutModule } from '../../projects/slide-out/src/lib/slide-out.module';
import { ThreeComponent } from './three/three.component';

@NgModule({

    declarations: [

        AppComponent,
        OneComponent,
        TwoComponent,
        ThreeComponent

    ],

    imports: [

        BrowserModule,
        SlideOutModule

    ],
    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
