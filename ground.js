class Ground {
    constructor(x, y, w, h)
    {
        var ground_options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.ground=Bodies.rectangle(x, y, w, h, ground_options);
        World.add(world, this.ground);
    }
    display()
    {

    var groundPos = this.ground.position;

    push ();
    translate (groundPos.x, groundPos.y);
    rectMode(CENTER);
    strokeWeight(4);
    fill(255, 255, 0);
    rect(0,0,this.w, this.h);
    pop ();
    }
}

