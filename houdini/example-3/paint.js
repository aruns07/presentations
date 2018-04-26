registerPaint('artDirection', class {
    static get inputProperties() { 
        return ['list-style-image',
                '--input-image-width',
                '--input-image-height',
                '--art-block']; 
    }
    
    paint(ctx, box, properties) {

        const inputImage = properties.get('list-style-image');
        const inputImageWidth = properties.get('--input-image-width').value;
        const inputImageHeight = properties.get('--input-image-height').value;
        const artBlock = properties.get('--art-block').value;;

        //calculate width and height of image to fill the box.
        const imageAspectRatio = inputImageWidth / inputImageHeight;

        let drawImageWidth = box.width;
        let drawImageHeight = drawImageWidth / imageAspectRatio;

        if (drawImageHeight < box.height) {
            drawImageHeight = box.height;
            drawImageWidth = drawImageHeight * imageAspectRatio;
        }

        //Translate context to ensure the art block is visible.
        // Consider a grid on the image. Having nine blocks of equal size.
        // Number as following
        // 0, 1, 2
        // 3, 4, 5
        // 6, 7, 8
        // The input artBlock tells where the art is present.
        let translateX = 0;
        let translateY = 0;

        switch(artBlock) {
            case 1:
                translateX = (box.width / 2) - (drawImageWidth / 2);
                break;
            case 2:
                translateX = box.width - drawImageWidth;
                break;
            case 3:
                translateY = (box.height / 2) - (drawImageHeight / 2);
                break;
            case 4:
                translateX = (box.width / 2) - (drawImageWidth / 2);
                translateY = (box.height / 2) - (drawImageHeight / 2);
                break;
            case 5:
                translateX = box.width - drawImageWidth;
                translateY = (box.height / 2) - (drawImageHeight / 2);
                break;
            case 6:
                translateY = box.height - drawImageHeight;
                break;
            case 7:
                translateX = (box.width / 2) - (drawImageWidth / 2);
                translateY = box.height - drawImageHeight;
                break;
            case 8:
                translateX = box.width - drawImageWidth;
                translateY = box.height - drawImageHeight;
                break;
        };
        
        ctx.translate(translateX, translateY);

        console.log(inputImage);
        ctx.drawImage(inputImage, 0, 0, drawImageWidth, drawImageHeight);
    }
});