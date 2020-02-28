import { trigger, state, style, animate, transition } from '@angular/animations';

export const inOutAnimation =
    trigger('inOutAnimation', [
        transition(':enter', [
            style({
                transform: 'translateY(40px)',
                opacity: 0
            }),
            animate('0.5s',
                style({
                    transform: '*',
                    opacity: 1
                }))
        ]),
        transition(':leave', [
            style({
                transform: '*',
                opacity: '*'
            }),
            animate('0.5s',
                style({
                    transform: 'translateY(40px)',
                    opacity: 0
                }))
        ])
    ]);

