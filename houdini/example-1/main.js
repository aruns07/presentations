CSS.registerProperty({
    name: '--line-color',
    syntax: '<color>',
    initialValue: 'black'
});

CSS.paintWorklet.addModule('./paint.js');