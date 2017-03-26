export const verySmallAsteroidBMD = (game) => {
    let shape = createAsteroidShape(game, 32);

    let bmd = shape.bmd;
    bmd.ctx.fillStyle = '#db635a';
    // bmd.ctx.fill();

    return shape;
};


export const smallAsteroidBMD = (game) => {
    let shape = createAsteroidShape(game, 64);

    let bmd = shape.bmd;
    bmd.ctx.fillStyle = '#d49588';
    // bmd.ctx.fill();

    return shape;
};

export const mediumAsteroidBMD = (game) => {
    let shape = createAsteroidShape(game, 126);

    let bmd = shape.bmd;
    bmd.ctx.fillStyle = '#7ca6b1';
    // bmd.ctx.fill();

    return shape;
};

export const largeAsteroidBMD = (game) => {
    let shape = createAsteroidShape(game, 256);

    let bmd = shape.bmd;
    bmd.ctx.fillStyle = '#436f6e';
    // bmd.ctx.fill();

    return shape;
};

const createAsteroidShape = (game, size) => {
    let third = size /3;
    let bmd = game.add.bitmapData(size, size);
    let polygon = [];

    bmd.ctx.beginPath();
    bmd.ctx.moveTo(getRandomOffset(third), third + getRandomOffset(third));

    if (Math.random() > 0.3) {
        let x = 0;
        let y = 2 * third + getRandomOffset(third);
        bmd.ctx.lineTo(x, y);
        polygon.push(x);
        polygon.push(y);
    }

    if (Math.random() > 0.3) {
        let x = third + getRandomOffset(third);
        let y = size + getRandomOffset(third);
        bmd.ctx.lineTo(x, y);
        polygon.push(x);
        polygon.push(y);
    }

    if (Math.random() > 0.3) {
        let x = 2 * third + getRandomOffset(third);
        let y = size + getRandomOffset(third);
        bmd.ctx.lineTo(x, y);
        polygon.push(x);
        polygon.push(y);
    }

    if (Math.random() > 0.3) {
        let x = size + getRandomOffset(third);
        let y = 2 * third + getRandomOffset(third);
        bmd.ctx.lineTo(x, y);
        polygon.push(x);
        polygon.push(y);
    }

    if (Math.random() > 0.3) {
        let x = size + getRandomOffset(third);
        let y = third + getRandomOffset(third);
        bmd.ctx.lineTo(x, y);
        polygon.push(x);
        polygon.push(y);
    }

    if (Math.random() > 0.3) {
        let x = 2 * third + getRandomOffset(third);
        let y = getRandomOffset(third);
        bmd.ctx.lineTo(x, y);
        polygon.push(x);
        polygon.push(y);
    }

    if (Math.random() > 0.3) {
        let x = third + getRandomOffset(third);
        let y = getRandomOffset(third);
        bmd.ctx.lineTo(x, y);
        polygon.push(x);
        polygon.push(y);
    }

    bmd.ctx.closePath();

    return {bmd, polygon};
};

function getRandomOffset(third) {
    return Math.random() * third - third / 2;
};


