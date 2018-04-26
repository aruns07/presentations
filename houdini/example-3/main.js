CSS.registerProperty({
    name: '--input-image',
    syntax: '<image> | none',
    initialValue: 'none'
});

CSS.registerProperty({
    name: '--input-image-width',
    syntax: '<length>',
    initialValue: '0'
});

CSS.registerProperty({
    name: '--input-image-height',
    syntax: '<length>',
    initialValue: '0'
});

CSS.registerProperty({
    name: '--art-block',
    syntax: '<number>',
    initialValue: '0'
});


CSS.paintWorklet.addModule('./paint.js');