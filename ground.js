class Ground{
    constructor(x,y,w,h){
        //x=200,y=390,w=400,h=20
        this.x=x;
        //bottomGround.x=200
        this.y=y;
        this.w=w;
        this.h=h;

        var ground_options={
            isStatic:true
            }
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,ground_options);
        World.add(myworld,this.body);

    }
    show(){
        fill("green")
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}