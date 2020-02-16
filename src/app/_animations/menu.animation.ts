import { trigger, state, style, animate, transition } from '@angular/animations';

export const menuAnimation =
    trigger('menuAnimation', [
        transition(':enter', [
            style({
                transform: 'translateY(-20vh)',
                opacity: 0
            }),
            animate('0.2s',
                style({ transform: '*', }))
        ]),
        transition(':leave', [
            style({ transform: '*' }),
            animate('0.2s',
                style({
                    transform: 'translateY(-20vh)',
                    opacity: 0
                }))
        ])
    ]);

export const menuBtnMobileAnimation =
    trigger('menuBtnMobileAnimation', [
        transition(':enter', [
            style({
                transform: 'translateY(100vh)',
                opacity: 0
            }),
            animate('0.4s',
                style({
                    transform: '*',
                    opacity: 1
                }))
        ]),
        transition(':leave', [
            style({
                transform: '*',
                // opacity: 1
            }),
            animate('0.4s',
                style({
                    transform: 'scale(0)',
                    // opacity: 0
                }))
        ])
    ]);

export const menuMobileAnimation =
    trigger('menuMobileAnimation', [
        transition(':enter', [
            style({
                transform: 'scale(0)',
                opacity: 0
            }),
            animate('0.25s',
                style({
                    transform: '*',
                    opacity: 1
                }))
        ]),
        transition(':leave', [
            style({
                transform: '*',
                opacity: 1
            }),
            animate('0.25s',
                style({
                    transform: 'scale(0)',
                    opacity: 0
                }))
        ])
    ]);