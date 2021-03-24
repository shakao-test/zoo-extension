namespace SpriteKind {
    export const Camera = SpriteKind.create()
}
let __camera = sprites.create(image.create(150, 110), SpriteKind.Camera)
__camera.image.setPixel(0, 0, 4)
__camera.image.setPixel(149, 0, 4)
__camera.image.setPixel(0, 109, 4)
__camera.image.setPixel(149, 109, 4)
controller.moveSprite(__camera)
__camera.setFlag(SpriteFlag.Invisible, false)
__camera.setFlag(SpriteFlag.Ghost, true)
__camera.setFlag(SpriteFlag.StayInScreen, true)
scene.cameraFollowSprite(__camera)


let won = false
scene.onOverlapTile(SpriteKind.Penguin, assets.tile`tile`, function (sprite, location) {
    if (!(won)) {
        won = true
        timer.after(1000, function () {
            game.showLongText("Whew! You did it! Thanks for saving the day!", DialogLayout.Bottom)
            timer.after(1000, function () {
                game.over(true)
            })
        })
    }
})