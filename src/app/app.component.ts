import { Component } from '@angular/core';
import { SlideOutPosition } from 'projects/slide-out/src/lib/slide-out-position';
import { SlideOutService } from '../../projects/slide-out/src/lib/slide-out.service';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { SlideOutClickEvent } from '../../projects/slide-out/src/lib/slide-out-click-event';
import { ThreeComponent } from './three/three.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    public constructor(private readonly slideOutService: SlideOutService) {

        const instance1 = slideOutService.open('one', {

            title: 'Some Title',
            componentType: OneComponent

        });

        instance1.click$.subscribe(event => {

            if (event === SlideOutClickEvent.APPLY) {

                instance1.close();

            }

        });

        setTimeout(() => {

            const instance2 = slideOutService.open('two', {

                componentType: TwoComponent,
                position: SlideOutPosition.RIGHT,
                theme: {

                    backgroundColor: '#555'

                },
                buttons: {

                    reset: {

                        show: true

                    }

                }

            });

            instance2.click$.subscribe(event => {

                if (event === SlideOutClickEvent.APPLY) {

                    instance2.close();

                }

            });

            setTimeout(() => {

                const instance3 = slideOutService.open('three', {

                    componentType: ThreeComponent,
                    position: SlideOutPosition.LEFT,
                    theme: {

                        backgroundColor: '#aaa'

                    },

                    buttons: {

                        apply: {

                            show: true

                        }

                    }

                });

                instance3.click$.subscribe(event => {

                    if (event === SlideOutClickEvent.APPLY) {

                        instance3.close();

                    }

                });

            }, 2000);

        }, 2000);

    }

}
