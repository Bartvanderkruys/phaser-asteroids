export const playerShipBMD = (game) => {
    let bmd = game.add.bitmapData(64,64);
    let polygon = [16,32,  0,54,  64,32,  0,8];
    bmd.ctx.beginPath();
    bmd.ctx.lineTo(16, 32);
    bmd.ctx.lineTo(0, 54);
    bmd.ctx.lineTo(64, 32);
    bmd.ctx.lineTo(0, 8);
    bmd.ctx.closePath();
    bmd.ctx.fillStyle = '#fcfff5';
    // bmd.ctx.fill();

    return {bmd: bmd, polygon: polygon};
};