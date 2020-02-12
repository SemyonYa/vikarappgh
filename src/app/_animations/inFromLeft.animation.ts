import { trigger, state, style, animate, transition } from '@angular/animations';

export const inFromLeftAnimation =
    trigger('inFromLeftAnimation', [
        transition(':enter', [
            style({
                transform: 'translateX(-50vw)',
                // opacity: 0
            }),
            animate('1s ease-out',
                style({
                    transform: '*',
                    // opacity: 1
                }))
        ]),
        transition(':leave', [
            style({ transform: 'scale(1)' }),
            animate('0.5s',
                style({
                    transform: 'scale(0)'
                }))
        ])
    ]);

