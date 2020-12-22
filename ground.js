class Ground
{
    constructor(x,y)
    {
        var options = 
        {
            isStatic:true
        }

        this.width = 1170
        this.height = 20
        this.body = Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)
    }
    display()
    {
        var pos = this.body.position
        push()
        fill("brown")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
        pop()
    }
}