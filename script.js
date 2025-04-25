// creating gsap animations
const timelineContent = gsap.timeline({defaults: {duration: 0.7, ease: 'back.out(1)'}});
const timelineHero = gsap.timeline({defaults: {duration: 0.7, ease: 'back.out(1)'}});

// content animations
timelineContent
    .from('.reviews-container', {y: '100%', opacity: 0})
    .from('.first-line', {y: '100%'}, '<0.1')
    .from('.second-line', {y: '100%'}, '<0.1')
    .from('.desc', {y: '100%'}, '<0.1')
    .from('.primary', {y: '120%'}, '<0.1')
    .from('.secondary', {y: '120%'}, '<0.1')
    .from('.btm-paragraph', {y: '100%'}, '<0.1')
    .from('.logo-container', {y: '100%', stagger: 0.1, opacity: 0}, '<0.1')

// hero animations
timelineHero
    .from('.hero', {y: '20%', opacity: 0, duration: 1})
    .from('.grid-container', {y: '30%', stagger: 0.1, opacity: 0}, '<0.4')
