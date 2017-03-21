export const verySmallAsteroidBMD = (game) => {
    let bmd = createAsteroidShape(game, 32);
    bmd.ctx.fillStyle = '#db635a';
    bmd.ctx.fill();

    return bmd;
};


export const smallAsteroidBMD = (game) => {
    let bmd = createAsteroidShape(game, 64);
    bmd.ctx.fillStyle = '#d49588';
    bmd.ctx.fill();

    return bmd;
};

export const mediumAsteroidBMD = (game) => {
    let bmd = createAsteroidShape(game, 126);
    bmd.ctx.fillStyle = '#7ca6b1';
    bmd.ctx.fill();

    return bmd;
};

export const largeAsteroidBMD = (game) => {
    let bmd = createAsteroidShape(game, 256);
    bmd.ctx.fillStyle = '#436f6e';
    bmd.ctx.fill();

    return bmd;
};

const createAsteroidShape = (game, size) => {
    let third = size /3;
    let bmd = game.add.bitmapData(size, size);

    bmd.ctx.beginPath();
    bmd.ctx.moveTo(getRandomOffset(third), third + getRandomOffset(third));

    if (Math.random() > 0.3) {
        bmd.ctx.lineTo(0, 2 * third + getRandomOffset(third));
    }

    if (Math.random() > 0.3) {
        bmd.ctx.lineTo(third + getRandomOffset(third), size + getRandomOffset(third));
    }

    if (Math.random() > 0.3) {
        bmd.ctx.lineTo(2 * third + getRandomOffset(third), size + getRandomOffset(third));
    }

    if (Math.random() > 0.3) {
        bmd.ctx.lineTo(size + getRandomOffset(third), 2 * third + getRandomOffset(third));
    }

    if (Math.random() > 0.3) {
        bmd.ctx.lineTo(size + getRandomOffset(third), third + getRandomOffset(third));
    }

    if (Math.random() > 0.3) {
        bmd.ctx.lineTo(2 * third + getRandomOffset(third), getRandomOffset(third));
    }

    if (Math.random() > 0.3) {
        bmd.ctx.lineTo(third + getRandomOffset(third), getRandomOffset(third));
    }

    bmd.ctx.closePath();

    return bmd;
};

function getRandomOffset(third) {
    return Math.random() * third - third / 2;
};


