import { NgModule } from '@angular/core';
import { SlideOutComponent } from './slide-out.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({

    declarations: [

        SlideOutComponent

    ],

    imports: [

        BrowserAnimationsModule,
        CommonModule

    ],

    exports: [

        SlideOutComponent

    ]

})
export class SlideOutModule {
}
