namespace SpriteKind {
    export const Camera = SpriteKind.create()
}
let mySprite = sprites.create(image.create(150, 110), SpriteKind.Camera)
mySprite.image.fill(4)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.Invisible, true)
mySprite.setFlag(SpriteFlag.Ghost, true)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
scene.cameraFollowSprite(mySprite)