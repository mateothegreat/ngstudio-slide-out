import { SlideOutConfig } from './slide-out-config';
import { SlideOutService } from './slide-out.service';
import { Subject } from 'rxjs';
import { SlideOutClickEvent } from './slide-out-click-event';

export class SlideOutInstance {

    public config: SlideOutConfig;
    public service: SlideOutService;
    public click$: Subject<SlideOutClickEvent> = new Subject();

    public constructor(config: SlideOutConfig, service: SlideOutService) {

        this.config = config;
        this.service = service;

    }

    public close(): void {

        this.service.dynamicComponentFactoryService.destroy(this.config.name);

    }

}
