namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`portal`, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    game.over(false)
})
let mySprite: Sprite = null
let coin: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level2`)
let myCorg = corgio.create(SpriteKind.Player)
myCorg.verticalMovement()
myCorg.horizontalMovement()
myCorg.updateSprite()
scene.cameraFollowSprite(myCorg)
for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 f f f f 5 5 5 f . . 
        . f 5 5 5 f f f f f f 5 5 f . . 
        . f 5 5 f f f 5 5 5 5 5 5 f . . 
        . f 5 5 f f 5 5 5 5 5 5 5 f . . 
        . f 5 5 f f 5 5 5 5 5 5 5 f . . 
        . f 5 5 f f f 5 5 5 5 5 5 f . . 
        . f 5 5 5 f f f f f f 5 5 f . . 
        . . f 5 5 5 f f f f 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coin)
    tiles.placeOnTile(coin, value)
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e e e e e . . . . . . 
            . . . . f 1 e 1 e f . . . . . . 
            . . . . e e e e e e . . . . . . 
            . . . . e 1 1 1 e e . . . . . . 
            . . . . e e e e f e . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
