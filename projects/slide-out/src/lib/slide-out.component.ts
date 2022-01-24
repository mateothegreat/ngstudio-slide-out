import { Component, AfterViewInit, ViewChild, ViewContainerRef, HostListener } from '@angular/core';
import { SlideOutInstance } from './slide-out-instance';
import { DynamicComponentFactoryService, DynamicComponentFactoryInstance } from '@ngstudio/dynamic-component-factory';
import { trigger, style, animate, transition } from '@angular/animations';
import { SlideOutClickEvent } from './slide-out-click-event';

@Component({

    selector: 'lib-slide-out',
    templateUrl: './slide-out.component.html',
    styleUrls: [ './slide-out.component.scss' ],
    animations: [

        trigger('slideDownUp', [

            transition(':enter', [ style({ width: 0 }), animate(200) ]),
            transition(':leave', [ animate(200, style({ width: 0 })) ])

        ])

    ]

})
export class SlideOutComponent implements AfterViewInit {

    @ViewChild('wrapper', { read: ViewContainerRef }) public wrapperRef: ViewContainerRef;
    @ViewChild('center', { read: ViewContainerRef }) public centerRef: ViewContainerRef;

    public instance: SlideOutInstance;
    public dynamicComponentFactoryInstance: DynamicComponentFactoryInstance<any>;

    public constructor(private readonly dynamicComponentFactoryService: DynamicComponentFactoryService) {

    }

    public ngAfterViewInit() {

        this.dynamicComponentFactoryService.createInContainer('center', this.centerRef, this.instance.config.componentType);

    }

    public onApplyClick(): void {

        this.instance.click$.next(SlideOutClickEvent.APPLY);

    }

    public onResetClick(): void {

        this.instance.click$.next(SlideOutClickEvent.RESET);

    }

    @HostListener('document:keydown.escape')
    public onEscapeHandler(): void {

        this.instance.service.closeTopOnly();

    }

}

