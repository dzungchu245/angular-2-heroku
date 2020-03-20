import { trigger, style, transition, animate, animation, useAnimation, group, query, animateChild } from '@angular/animations';

const fadeAnimation = animation([
  style({
    opacity: '{{ startOpacity }}'
  }),
  animate('{{ duration }}')
], { params: {startOpacity: 0, duration: '100ms'}});

export const routeFadeStateTrigger = (params) => trigger('routeFadeState', [
  transition(':enter', [
    useAnimation(fadeAnimation, {params: params})
  ]),
  transition(':leave', animate(500, 
    style({
      opacity: 0
    }))
  )
]);

const transformAnimation = animation([
  style({
    transform: '{{ transform }}',
    opacity: '{{ opacity }}'
  }),
  animate('{{ duration }}')
], { params: {transform: 'translateY(-100%)', opacity: 0, duration: '300ms'}});

export const routeSlideStateTrigger = trigger('routeSlideState', [
  transition(':enter', [
    useAnimation(transformAnimation, {params: 
      {transform: 'translateY(-100%)', opacity: 0, duration: '300ms'}})
  ]),
  transition(':leave', animate(300, 
    style({
      transform: 'translateY(100%)',
      opacity: 0
    }))
  )
]);

// routeStateTrigger will overide previous route triggers
export const routeStateTrigger = trigger('routeState', [
  transition('* => *', [
    group([
      query(':enter', [
        //animateChild(),
        useAnimation(transformAnimation, {params: 
          {transform: 'translateY(-400px)', opacity: 0, duration: '300ms ease-out'}})
      ], { optional: true }),
      query(':leave', [
        animate('300ms ease-out', 
          style({
            transform: 'translateY(600px)',
            opacity: 0
          })
        )
      ], { optional: true })
    ])
  ])
]);