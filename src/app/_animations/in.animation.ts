import { trigger, state, style, animate, transition } from '@angular/animations';

export const inAnimation =
    trigger('inAnimation', [
        transition(':enter', [
            style({
                transform: 'translateY(40px)',
                opacity: 0
            }),
            animate('0.2s',
                style({
                    transform: '*',
                    opacity: 1
                }))
        ]),
        transition(':leave', [
            style({ opacity: '*' }),
            animate('0.2s',
                style({
                    opacity: 0
                }))
        ])
    ]);

