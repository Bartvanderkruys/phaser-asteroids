export const screenWrap = (sprite, game) => {
    if (sprite.body.x < 0) {
        sprite.body.x = game.width;
    }
    else if (sprite.body.x > game.width) {
        sprite.body.x = 0;
    }

    if (sprite.body.y < 0) {
        sprite.body.y = game.height;
    }
    else if (sprite.body.y > game.height) {
        sprite.body.y = 0;
    }
};