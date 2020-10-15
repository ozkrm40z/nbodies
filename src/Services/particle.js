export default class Particle{
    constructor(mass,posx,posy,color){
        this.Mass           = mass
        this._PositionX      = posx
        this._PositionY      = posy
        this.VelocityX      = 0
        this.VelocityY      = 0
        this.AccelarationX  = 0
        this.AccelarationY  = 0
        this.Color          = color
    }

    get PositionX(){
        return this._PositionX
    }

    set PositionX(position){
        this._PositionX = position
    }

    get PositionY(){
        return this._PositionY
    }

    set PositionY(position){
        this._PositionY = position
    }

    Move(){
        this.VelocityX += this.AccelarationX;
        this.VelocityY += this.AccelarationY;
        this.PositionX += this.VelocityX;
        this.PositionY += this.VelocityY;
        this.AccelarationX = 0;
        this.AccelarationY = 0;
    }

    Accelerate(force){
        this.AccelarationX += force.x/this.Mass;
        this.AccelarationY += force.y/this.Mass;
    }
}
