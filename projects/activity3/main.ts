namespace SpriteKind {
    export const Camera = SpriteKind.create()
    //% isKind
    export const Penguin = SpriteKind.create()
}
let __camera = sprites.create(image.create(150, 110), SpriteKind.Camera)
__camera.image.setPixel(0, 0, 4)
__camera.image.setPixel(149, 0, 4)
__camera.image.setPixel(0, 109, 4)
__camera.image.setPixel(149, 109, 4)
controller.moveSprite(__camera)
__camera.setFlag(SpriteFlag.Invisible, true)
__camera.setFlag(SpriteFlag.Ghost, true)
__camera.setFlag(SpriteFlag.StayInScreen, true)
scene.cameraFollowSprite(__camera)


let won = false
scene.onOverlapTile(SpriteKind.Penguin, assets.tile`tile`, function (sprite, location) {
    if (!(won)) {
        won = true
        control.runInBackground(function() {
            pause(1500)
            game.over(true)
        })
    }
})