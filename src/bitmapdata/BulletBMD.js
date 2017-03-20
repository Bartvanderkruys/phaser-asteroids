export const bulletBMD = (game) => {
    let bmd = game.add.bitmapData(6,6);

    bmd.ctx.beginPath();
    bmd.ctx.lineTo(6, 3);
    bmd.ctx.lineTo(0, 6);
    bmd.ctx.lineTo(0, 0);
    bmd.ctx.closePath();
    bmd.ctx.fillStyle = "#fcfff5";
    bmd.ctx.fill();

    return bmd;
};
