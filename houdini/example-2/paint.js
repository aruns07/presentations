registerPaint('btn-break', class {
    static get inputProperties() { 
        return ['--bg-color','--break-point']; 
    }
    
    paint(ctx, box, properties) {

        const bgColor = properties.get('--bg-color').value;
        const breakPoint = properties.get('--break-point').value;

        const width = box.width;
        const height = box.height;

        ctx.fillStyle = bgColor;

        if (breakPoint === 0) {            
            ctx.fillRect(0, 0, width, height);
        } else {
            const breakAtWidth = width * breakPoint;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(breakAtWidth - 6, 0);
            ctx.lineTo(breakAtWidth - 6, 10);
            ctx.lineTo(breakAtWidth - 6 - 10, 10);
            ctx.lineTo(breakAtWidth - 6 - 10, 20);
            ctx.lineTo(breakAtWidth - 6, 20);
            ctx.lineTo(breakAtWidth - 6, 30);
            ctx.lineTo(breakAtWidth - 6 - 10, 30);
            ctx.lineTo(breakAtWidth - 6 - 10, 40);
            ctx.lineTo(breakAtWidth - 6, 40);
            ctx.lineTo(breakAtWidth - 6, 50);
            ctx.lineTo(breakAtWidth - 6 - 10, 50);
            ctx.lineTo(breakAtWidth - 6 - 10, height);
            ctx.lineTo(0, height);
            ctx.closePath();
            ctx.fill();
            

            ctx.beginPath();
            ctx.moveTo(breakAtWidth + 6, 0);
            ctx.lineTo(breakAtWidth + 6, 10);
            ctx.lineTo(breakAtWidth + 6 - 10, 10);
            ctx.lineTo(breakAtWidth + 6 - 10, 20);
            ctx.lineTo(breakAtWidth + 6, 20);
            ctx.lineTo(breakAtWidth + 6, 30);
            ctx.lineTo(breakAtWidth + 6 - 10, 30);
            ctx.lineTo(breakAtWidth + 6 - 10, 40);
            ctx.lineTo(breakAtWidth + 6, 40);
            ctx.lineTo(breakAtWidth + 6, 50);
            ctx.lineTo(breakAtWidth + 6 - 10, height);
            ctx.lineTo(breakAtWidth, height);
            ctx.lineTo(width, height);
            ctx.lineTo(width, 0);
            ctx.closePath();
            ctx.fill();
            
        }
    }
});