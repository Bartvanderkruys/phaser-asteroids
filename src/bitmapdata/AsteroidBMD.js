export const verySmallAsteroidBMD = (game) => {
    let bmd = game.add.bitmapData(16, 16);

    bmd.ctx.beginPath();
    bmd.ctx.lineTo(16, 8);
    bmd.ctx.lineTo(0, 16);
    bmd.ctx.lineTo(0, 0);
    bmd.ctx.closePath();
    bmd.ctx.fillStyle = '#db635a';
    bmd.ctx.fill();

    return bmd;
};


export const smallAsteroidBMD = (game) => {
    let bmd = game.add.bitmapData(32, 32);

    bmd.ctx.beginPath();
    bmd.ctx.lineTo(32, 16);
    bmd.ctx.lineTo(0, 32);
    bmd.ctx.lineTo(0, 0);
    bmd.ctx.closePath();
    bmd.ctx.fillStyle = '#d49588';
    bmd.ctx.fill();

    return bmd;
};

export const mediumAsteroidBMD = (game) => {
    let bmd = game.add.bitmapData(64, 64);

    bmd.ctx.beginPath();
    bmd.ctx.lineTo(64, 32);
    bmd.ctx.lineTo(0, 64);
    bmd.ctx.lineTo(0, 0);
    bmd.ctx.closePath();
    bmd.ctx.fillStyle = '#7ca6b1';
    bmd.ctx.fill();

    return bmd;
};

export const largeAsteroidBMD = (game) => {
    let bmd = game.add.bitmapData(126, 126);

    bmd.ctx.beginPath();
    bmd.ctx.lineTo(126, 64);
    bmd.ctx.lineTo(0, 126);
    bmd.ctx.lineTo(0, 0);
    bmd.ctx.closePath();
    bmd.ctx.fillStyle = '#436f6e';
    bmd.ctx.fill();

    return bmd;
};

