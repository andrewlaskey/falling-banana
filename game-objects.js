//***************HELP FUNCTIONS*********************
function calculateDistance(x1, y1, x2, y2){
	x = Math.abs(x1 - x2);
	y = Math.abs(y1 - y2);
	
	return Math.sqrt((x * x) + (y * y));
}

function collisionDetect(obj1, obj2){
	var left1;
	var right1;
	var top1;
	var bottom1;
	
	var left2;
	var right2;
	var top2;
	var bottom2;
	
	left1 = obj1.x;
	left2 = obj2.x;
	right1 = obj1.x + obj1.w;
	right2 = obj2.x + obj2.w;
	top1 = obj1.y;
	top2 = obj2.y;
	bottom1 = obj1.y + obj1.h;
	bottom2 = obj2.y + obj2.h;
	
	if (bottom1 < top2) return 0;
	if (top1 > bottom2) return 0;
	
	if (right1 < left2) return 0;
	if (left1 > right2) return 0;
	
	return 1;
}
//**************************************************

    
function gameWorld (gravity) {
 	this.w = 0;
 	this.h = 0;
 	this.gravity = gravity || 7;
	this.score = 0;
 	this.gameObjects = [];
 	this.keyPressed = { right:false, left:false };
 	this.background = drawForrest;
}

gameWorld.prototype.addObject = function(newGameObject) {
	this.gameObjects.push(newGameObject);
}

gameWorld.prototype.updateGameObjects = function() {
	for (var i = 0; i < this.gameObjects.length; i++) {
		//move the object
		this.gameObjects[i].move(this.gravity,this.keyPressed);
		
		//update its position
		this.gameObjects[i].x += this.gameObjects[i].vX;
		this.gameObjects[i].y += this.gameObjects[i].vY;
		
		//check if the object has hit any other objects
		if (this.gameObjects[i].solid) {
		
			for (var l = 0; l < this.gameObjects.length; l++) {
			
				if (l != i && this.gameObjects[l].solid) {
				
					if (collisionDetect(this.gameObjects[i], this.gameObjects[l])) {
						
						if (this.gameObjects[i].giveDamage && this.gameObjects[l].destructable) {
							this.gameObjects[l].life -= this.gameObjects[i].damage;
						}
						
						if (this.gameObjects[i].destructable && this.gameObjects[i].type != 'player') {
							this.gameObjects[i].life -= 1;
							
						}
						
						if (this.gameObjects[i].givePoint && this.gameObjects[l].type == 'player') {
							this.score += this.gameObjects[i].points;
						}
					}
				}
			}
		}
		
		
	}
}

gameWorld.prototype.removeDeadObjects = function() {
	for (var i = 0; i < this.gameObjects.length; i++) {
		if (this.gameObjects[i].life <= 0) {
			this.gameObjects.splice(i,1);
		}
	}
}

gameWorld.prototype.drawGame = function(ctx) {
	//clear the screen
	ctx.clearRect(0,0,this.w,this.h);
	
	//draw backgound
	this.background(ctx,this.w,this.h);
	
	//draw all the game objects
	for (var i = 0; i < this.gameObjects.length; i++) {
		//draw player life
		if(this.gameObjects[i].type === 'player') {
			ctx.fillStyle = 'rgb(220,220,220)';
			ctx.font = '18px Helvetica, Ariel';
			ctx.fillText(this.gameObjects[i].life,this.w - 10,this.h-5);
		}
		//draw other object stuff
		if (this.gameObjects[i].life === 0) {
			this.gameObjects[i].draw(ctx,0);
		} else {
			if (this.gameObjects[i].animate) {
			 	this.gameObjects[i].tick += 1;
			 	if (this.gameObjects[i].tick == 8) {
			 		this.gameObjects[i].tick = 0;
			 		this.gameObjects[i].frame += 1;
			 		if (this.gameObjects[i].frame > this.gameObjects[i].maxFrame) {
			 			this.gameObjects[i].frame = this.gameObjects[i].minFrame;
			 		}
			 	}
			 	this.gameObjects[i].draw(ctx, this.gameObjects[i].frame);
			} else {
				this.gameObjects[i].draw(ctx,1);
			}
		}
	}
	
	//draw score
	ctx.fillStyle = 'rgb(220,220,220)';
	ctx.font = '18px Helvetica, Ariel';
	ctx.fillText(this.score,10,this.h - 5);
}

gameWorld.prototype.addNewObjects = function() {
	var bananaProb = 5;
	var appleProb = 1;
	
	var prob = Math.random() * 100;
	
	if (prob < bananaProb) {
		this.addObject(makeBanana(this.w));
	}
	
	if (prob < appleProb) {
		this.addObject(makeApple(this.w));
	}
	
}

function gameObject(options) {
	this.type = options.type;
	this.x = options.x || 0;
	this.y = options.y || 0;
	this.w = options.w || 0;
	this.h = options.h || 0;
	this.vX = options.vX || 0;
	this.vY = options.vY || 0;
	this.life = options.life || 0;
	this.damage = options.damage || 0;
	this.points = options.points || 0;
	this.move = options.move || function() { };
	this.draw = options.draw || function() { };	
}
//--------------------------------------------

//----------DECORATORS AND SUCH---------------
var fall = function(gravity) {
	this.vY = gravity;
}

function isSolid(gObj) {
	var solidObj = gObj;
	solidObj.solid = true;
	return solidObj;
}

function isDestructable(gObj) {
	var destObj = gObj;
	destObj.destructable = true;
	return destObj;
}

function doesDamage(gObj) {
	var damageObj = gObj;
	damageObj.giveDamage = true;
	return damageObj;
}

function givesPoints(gObj) {
	var pointsObj = gObj;
	pointsObj.givePoint = true;
	return pointsObj;
}

function userControlled(gObj) {
	var userObj = gObj;
	userObj.move = function(gravity, keyPressed) {
		var speed = 5;
		/*switch(keyPressed) {
			case 'RIGHT':
				this.vX = speed;
				this.animate = true;
				break;
			case 'LEFT':
				this.vX = speed * -1;
				this.animate = true;
				break;
			case 'NONE':
				this.vX = 0;
				this.animate = false;
				break;
		}*/
		this.vX = 0;
		this.animate = false;
		if (keyPressed.right) {
			this.vX = speed;
			this.animate = true;
		}
		if (keyPressed.left) {
			this.vX = speed * -1;
			this.animate = true;
		}
	};
	return userObj;
}

function isAnimated(gObj, lastFrame, firstFrame) {
	var animatedObj = gObj;
	animatedObj.animate = true;
	animatedObj.frame = 1;
	animatedObj.tick = 0;
	animatedObj.maxFrame = lastFrame;
	animatedObj.minFrame = firstFrame;
	return animatedObj;
}
	
//-------------------------------------------

//----------CONSTRUCTORS----------------
var makeGround = function(worldW, worldH) {
	var ground = new gameObject({
	type: 'ground',
	x: 0,
	y: worldH-25,
	w: worldW,
	h: 25,
	life: 1,
	draw: drawGround 
	});
	ground = isSolid(ground);
	return ground;
}

//makes a new banana
var makeBanana = function(worldW) {
	var banana = new gameObject({
		type: 'banana',
		x: Math.random() * worldW,
		y: 0,
		w: 10,
		h: 18,
		life: 1,
		points: 1,
		move: fall,
		draw: drawBanana
	});
	banana = isSolid(banana);
	banana = isDestructable(banana);
	banana = givesPoints(banana);
	return banana;
}

//makes a new apple
var makeApple = function(worldW) {
	var apple = new gameObject({
		type: 'apple',
		x: Math.random() * worldW,
		y: 0,
		w: 10,
		h: 18,
		life: 1,
		damage: 1,
		move: fall,
		draw: drawApple
	});
	apple = isSolid(apple);
	apple = doesDamage(apple);
	apple = isDestructable(apple);
	return apple;
}

var makePlayer = function() {
	var player = new gameObject({
		type: 'player',
		x: 200,
		y: 336,
		w: 21,
		h: 38,
		vX: 0,
		vY: 0,
		damage: 5,
		life: 5,
		draw: drawCatcher
	})
	player = isSolid(player);
	player = isDestructable(player);
	player = userControlled(player);
	player = isAnimated(player,2,1);
	return player;
}

var makeCanopy = function(worldW) {
	var canopy = new gameObject({
			x: 0,
			y: 0,
			w: worldW,
			h: 50,
			life: 1,
			draw: drawCanopy
		});
	return canopy;
}
//---------------------------------------
