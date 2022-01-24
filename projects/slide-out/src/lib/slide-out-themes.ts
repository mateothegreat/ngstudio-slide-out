import { SlideOutTheme } from "./slide-out-theme";
import { SlideOutThemeButtonAlignment } from './slide-out-theme-button-alignment';

export const SlideOutThemes = {

    dark: {

        backgroundColor: '#222',

        collapse: {

            color: '#fff',
            fontSize: '20px'

        },
        title: {

            color: '#aaa'

        },
        close: {

            color: '#666'

        },
        buttons: {

            alignment: SlideOutThemeButtonAlignment.RIGHT,
            apply: {

                backgroundColor: 'mediumseagreen',
                borderColor: '#666'

            },
            reset: {

                backgroundColor: '#555',
                borderColor: '#666'

            }

        }

    } as SlideOutTheme

};
