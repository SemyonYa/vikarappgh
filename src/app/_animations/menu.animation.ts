import { trigger, state, style, animate, transition } from '@angular/animations';

export const menuAnimation =
    trigger('menuAnimation', [
        state('first', style({
            transform: 'translateY(-20vh)',
            opacity: 0
        })),
        state('notFirst', style({
            transform: 'translateY(0)',
            opacity: 1
        })),
        transition('first => notFirst', animate('.4s .2s ease-out')),
        transition('notFirst => first', animate('.6s .0s ease-out'))
    ]);

export const menuBtnMobileAnimation =
    trigger('menuBtnMobileAnimation', [
        state('first', style({
            transform: 'translateY(60vh)',
            opacity: 1
        })),
        state('notFirst', style({
            transform: 'translateY(calc(-20vh)',
            opacity: 0
        })),
        transition('first => notFirst', animate('.4s .0s ease-out')),
        transition('notFirst => first', animate('.4s .2s ease-out'))
    ]);


export const menuMobileAnimation =
    trigger('menuMobileAnimation', [
        transition(':enter', [
            style({
                transform: 'translateY(100vh)'
            }),
            animate('.25s .0s ease-out', style({
                transform: '*'
            }))
        ]),
        transition(':leave', [
            style({
                transform: '*'
            }),
            animate('.25s .0s ease-in', style({
                transform: 'translateY(100vh)'
            }))
        ])
    ]);
