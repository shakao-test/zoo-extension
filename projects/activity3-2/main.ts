scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true)
})
let mySprite2: Sprite = null
let herman: Sprite = null
scene.setBackgroundColor(15)
herman = sprites.create(img`
    . . . c c . . . . . . . . . . . 
    . . c 3 6 c c c c . . . . . . . 
    . . c 6 3 3 3 3 6 c . . . . . . 
    . c 3 3 3 3 3 c c 6 c . c c . . 
    c 3 3 3 3 3 c 5 5 c 6 c 5 5 b . 
    c 3 3 3 3 3 f f 5 c 6 c 5 f f . 
    c c 3 3 3 6 f f 5 c 6 c 5 f f . 
    c c 6 6 6 6 c 5 5 3 c 3 5 5 b . 
    c 3 3 3 3 3 3 c 5 5 3 5 5 b . . 
    c 3 3 3 3 c c b 5 5 5 5 5 c c . 
    . c 3 3 c 5 5 b 4 5 5 5 4 5 5 c 
    . . b b c 5 b b 4 4 4 4 b 4 5 b 
    . b 5 4 c 4 5 5 5 b 4 b 5 5 4 c 
    . c 5 c 4 c 5 5 5 c 4 c 5 5 5 c 
    . c 5 c 4 c 5 5 5 5 c 5 5 5 5 c 
    . c c c . . c c c c c c c c c . 
    `, SpriteKind.Player)
herman.setPosition(20, 108)
animation.runMovementAnimation(
herman,
"h 4 h 8 h 10 h -10 h -8 h -4",
2000,
true
)
let coral = sprites.create(img`
    . . . . . . c c . . . . . c c . 
    . . . c c . c 3 c . c c . c 3 c 
    . . c 3 6 c 3 3 c . c 3 c 6 3 c 
    . . c 3 3 3 3 6 c . c 3 6 3 3 c 
    . . . c 6 3 6 6 c c c 3 3 3 c . 
    . . . . c c 6 6 c 6 c 6 3 3 c . 
    . . . . c 3 c 6 c 3 3 c 6 6 c . 
    c c . c 3 3 c c c c 3 3 c 6 c . 
    c 3 c c 3 6 6 c 3 c 3 6 c 6 c . 
    c 3 3 6 3 6 3 6 3 3 3 c c c c c 
    . c 3 3 3 c 3 3 6 3 6 c c 3 3 c 
    . . c 3 3 c c 3 3 3 6 c 3 3 6 . 
    c c c 6 3 6 c c 6 3 6 6 3 6 c c 
    c 3 3 3 3 3 c c c 3 6 3 3 3 3 c 
    . c c 6 6 3 6 6 c 6 3 3 6 c c . 
    . . . c 6 3 3 6 6 6 6 3 c . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(coral, sprites.builtin.coral0)
scene.cameraFollowSprite(herman)
