class Ball
{
    constructor(x,y,r)
    {
        var options = 
        {
            isStatic:false,
            density:1
        }
        this.r = r

        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)
    }
    display()
    {
        var pos = this.body.position
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.r)
    }
}