namespace SpriteKind {
    //% isKind
    export const Quail = SpriteKind.create()
    //% isKind
    export const Egg = SpriteKind.create()
}
sprites.onDestroyed(SpriteKind.Egg, function (sprite) {
    quail = sprites.create(img`
        f f . . . . . . . . . . 
        . . f . . . . . . . . . 
        . c c c c . . . . . . . 
        . c 1 c c b . . . . . . 
        f c c c b d b . . . . . 
        . . b b b d d b . . . . 
        . . b b b d b d b . . . 
        . . b b b b b d d b b b 
        . . b b b b b b b b b b 
        . . . . b b b b b . . . 
        . . . . . 4 . 4 . . . . 
        . . . . . 4 . . . . . . 
        `, SpriteKind.Quail)
    quail.setPosition(sprite.x, sprite.y)
    quail.setVelocity(randint(80, 120), randint(80, 120))
    quail.setBounceOnWall(true)
    quail.z = 10
})

let quail_egg: Sprite = null
let quail: Sprite = null
for (let index = 0; index < randint(3, 5); index++) {
    quail = sprites.create(img`
        f f . . . . . . . . . . 
        . . f . . . . . . . . . 
        . c c c c . . . . . . . 
        . c 1 c c b . . . . . . 
        f c c c b d b . . . . . 
        . . b b b d d b . . . . 
        . . b b b d b d b . . . 
        . . b b b b b d d b b b 
        . . b b b b b b b b b b 
        . . . . b b b b b . . . 
        . . . . . 4 . 4 . . . . 
        . . . . . 4 . . . . . . 
        `, SpriteKind.Quail)
    quail.setVelocity(randint(-100, 100), randint(-100, 100))
    quail.setPosition(randint(10, 150), randint(10, 110))
    quail.setBounceOnWall(true)
    quail.z = 10
}
game.onUpdateInterval(2000, function () {
    if (sprites.allOfKind(SpriteKind.Quail).length < 80) {
        for (let value of sprites.allOfKind(SpriteKind.Quail)) {
            let following = game.currentScene().followingSprites;
            if (!following || !following.find(el => el && el.self == value)) {
                quail_egg = sprites.create(img`
                    . . . c c . . . 
                    . . c 1 1 c . . 
                    . c b 1 1 b c . 
                    c b 1 1 1 b b c 
                    c 1 1 1 1 1 1 c 
                    c 1 1 b 1 1 1 c 
                    . c 1 1 1 b c . 
                    . . c c c c . . 
                    `, SpriteKind.Egg)
                quail_egg.setPosition(value.x, value.y)
                quail_egg.lifespan = randint(2000, 3000)
            }
        }
    }
})
game.onUpdate(function() {
    if (sprites.allOfKind(SpriteKind.Quail).length == 0 && sprites.allOfKind(SpriteKind.Egg).length == 0) {
        game.over(true)
    }
})