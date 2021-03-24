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