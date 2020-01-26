import {
  trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

const mainTransionParams = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: '200px',
      width: 'calc(100% - 200px)'
    })
  ], { optional: true }),
  query(':enter', [
    style({ left: 'calc(100% - 200px)' })
  ]),
  query(':leave', animateChild(), { optional: true }),
  group([
    query(':leave', [
      animate('300ms ease-out', style({ left: '100%' }))
    ], { optional: true }),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%' }))
    ])
  ]),
  query(':enter', animateChild()),
];

// Routable animations
export const slideInAnimation =
  trigger('routeAnimation', [
    transition('* <=> collapses', mainTransionParams),
    transition('* <=> buttons', mainTransionParams),
    transition('* <=> icons', mainTransionParams),
  ]);
