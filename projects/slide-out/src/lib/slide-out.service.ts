import { Injectable, ViewContainerRef } from '@angular/core';
import { DynamicComponentFactoryService, DynamicComponentFactoryInstance } from '@ngstudio/dynamic-component-factory';
import { SlideOutConfig } from './slide-out-config';
import { SlideOutInstance } from './slide-out-instance';
import { SlideOutComponent } from './slide-out.component';

@Injectable({
    providedIn: 'root'
})
export class SlideOutService {

    public instances: { [ name: string ]: SlideOutInstance } = {};

    public constructor(public readonly dynamicComponentFactoryService: DynamicComponentFactoryService) {

    }

    public open(name: string,
                config: SlideOutConfig,
                injectionPoint?: string | ViewContainerRef): SlideOutInstance {

        if (this.instances[ name ]) {

            throw new Error(`The slide out name "${ name }" is already in use!`);

        }

        config.name = name;

        config = new SlideOutConfig(config);

        const instance = new SlideOutInstance(config, this);

        this.instances[ name ] = instance;

        let ref: DynamicComponentFactoryInstance<SlideOutComponent>;

        if (injectionPoint) {

            if (typeof injectionPoint === 'string') {

                ref = this.dynamicComponentFactoryService.createInElementById(name, injectionPoint, SlideOutComponent);

            } else {

                ref = this.dynamicComponentFactoryService.createInContainer(name, injectionPoint, SlideOutComponent);

            }

        } else {

            ref = this.dynamicComponentFactoryService.createInApplicationRoot(name, SlideOutComponent);

        }

        ref.componentRef.instance.instance = instance;

        return instance;

    }

    public closeTopOnly(): void {

        const values = Object.values(this.instances);

        this.dynamicComponentFactoryService.destroy(values[ values.length - 1 ].config.name);

    }

}
