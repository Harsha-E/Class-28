class S_Shot {
    constructor(bodyA, pointB){

        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 75,
            Stiffness : 0.01,
        }
        this.sling = Matter.Constraint.create(options);
        
        this.pointB = pointB;
        
        World.add(qwerty, this.sling);

    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){

        if(this.sling.bodyA){

                var pointA = this.sling.bodyA.position;
                var pointB = this.sling.pointB;
                
                strokeWeight(3);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

}
