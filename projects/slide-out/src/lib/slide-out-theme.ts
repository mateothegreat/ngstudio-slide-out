import { SlideOutThemeButtonAlignment } from "./slide-out-theme-button-alignment";

export class SlideOutTheme {

    public backgroundColor?: string;

    public collapse?: {

        color?: string,
        fontSize?: string

    };

    public title?: {

        color?: string,
        fontSize?: string

    };

    public close?: {

        color?: string,
        fontSize?: string

    };

    public buttons?: {

        alignment?: SlideOutThemeButtonAlignment,
        apply?: {

            backgroundColor?: string,
            borderColor?: string,
            color?: string,
            fontSize?: string

        },
        reset?: {

            backgroundColor?: string,
            borderColor?: string,
            color?: string,
            fontSize?: string

        }

    };

}
