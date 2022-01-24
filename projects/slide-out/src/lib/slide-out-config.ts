import { SlideOutPosition } from './slide-out-position';
import { SlideOutTheme } from './slide-out-theme';
import { SlideOutThemes } from './slide-out-themes';
import { Type } from '@angular/core';

const merge = (current: any, updates: any) => {

    for (let key of Object.keys(updates)) {

        if (!current.hasOwnProperty(key) || typeof updates[ key ] !== 'object') {

            current[ key ] = updates[ key ];

        } else {

            merge(current[ key ], updates[ key ]);

        }

    }

    return current;

};

export class SlideOutConfig {

    public name?: string;
    public title?: string;
    public width?: string;
    public backDrop?: boolean = true;
    public position?: SlideOutPosition = SlideOutPosition.RIGHT;
    public theme?: SlideOutTheme = SlideOutThemes.dark;
    public componentType: Type<any>;
    public buttons?: {

        apply?: {

            show?: boolean,
            label?: string

        },
        reset?: {

            show?: boolean,
            label?: string

        }

    } = {

        apply: {

            show: true,
            label: 'APPLY'

        },
        reset: {

            show: true,
            label: 'RESET'

        }

    };

    public constructor(config: SlideOutConfig) {

        Object.assign(this, config);

        if (config.theme) {

            this.theme = merge(JSON.parse(JSON.stringify(SlideOutThemes.dark)), config.theme);

        }

    }

}
