registerPaint('bg-lines', class {
    static get inputProperties() { 
        return ['background-color','--line-color']; 
    }
    
    paint(ctx, box, properties) {
        const bgColor = properties.get('background-color').toString();
        const lineColor = properties.get('--line-color').toString();

        const width = box.width;
        const height = box.height;

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, width, height);

        ctx.strokeStyle = lineColor;
        ctx.beginPath();
        for (let index=0; index < 50; index++ ) {
            ctx.moveTo(Math.random() * width, Math.random() * height);
            ctx.lineTo(Math.random() * width, Math.random() * height);
        }
        ctx.stroke();        
    }
});