CSS.registerProperty({
    name: '--break-point',
    syntax: '<number>',
    initialValue: '0'
});

CSS.registerProperty({
    name: '--bg-color',
    syntax: '<color>',
    initialValue: 'white'
});

CSS.paintWorklet.addModule('./paint.js');