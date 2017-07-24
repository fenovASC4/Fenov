var userShip = "";
var enemyShip = "";
var enemyBullet = "";
var userBullet = "";


function bullet(x,y){
    this.x = x;
    this.y = y;
}


function setup(){
    createCanvas(500,400);
}

var spaceX = 250;
var spaceY = 375;
function draw(){
    background(0);

    fill(255); // This will add a fill for the shape below. In this case it is 100 (grayscale)
    ellipse(spaceX, spaceY, 35);

    if (keyIsDown(LEFT_ARROW))
    {
        if (spaceX > 20)
        {
            spaceX -= 5;
        }
    }

    else if (keyIsDown(RIGHT_ARROW))
    {
        if (spaceX < 480)
        {
            spaceX += 5;
        }
    }
    
    fill(255, 0, 0);
    ellipse(30, 200, 20);

    fill(255, 0, 0);
    ellipse(90, 200, 20);

    fill(255, 0, 0);
    ellipse(150, 200, 20);

    fill(255, 0, 0);
    ellipse(210, 200, 20);

        fill(255, 0, 0);
    ellipse(270, 200, 20);

        fill(255, 0, 0);
    ellipse(330, 200, 20);

        fill(255, 0, 0);
    ellipse(390, 200, 20);

        fill(255, 0, 0);
    ellipse(450, 200, 20);

        fill(255, 0, 0);
    ellipse(50, 170, 20);

        fill(255, 0, 0);
    ellipse(110, 170, 20);
    
        fill(255, 0, 0);
    ellipse(180, 170, 20);

    


}

function keyPressed(UP_ARROW)
    {
        var uBullet = new bullet(spaceX, spaceY + 50)

        fill(150, 0, 0);
        ellipse(uBullet.x, uBullet.y, 10);
    }
/*function setup(){
    createCanvas(800,700);
}
var circle = 0
function draw(){
    background(51);
    fill('red');
    ellipse(400,600,100,100);
    fill(255, 204, 0);
    for(i=0; i<circle.lengh;i++(for 
    }
// >>>>>>>>>>>>>---Fuad's Code------<<<<<<<<<<<<<<<
// Varaibles
var spaceShip = "";
var enemy = "";
var spaceShipProjectiles = "";
var enemyProjectiles = "";
var health = 100;

//Canvas Creation
function setup(){
    createCanvas(800,700);
}

function draw(){
    background(51);
    fill('red');
    ellipse(400,600,100,100);
    fill(255, 204, 0);
    ellipse
}
// User Lives
function start(){
    Health = 100;
}
function update(){
    if(health <=0)
    {
    Die();
    }
}




// Game Over
function die(){
    Destory(gameObject);
}

}*/