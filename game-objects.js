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
}

gameWorld.prototype.addObject = function(newGameObject) {
	this.gameObjects.push(newGameObject);
}

gameWorld.prototype.updateGameObjects = function() {
	for (var i = 0; i < this.gameObjects.length; i++) {
		//move the object
		this.gameObjects[i].update(this.gravity);
		
		//check if the object has hit any other objects
		for (var l = 0; l < this.gameObjects.length; l++) {
			if (l != i) {
				if (collisionDetect(this.gameObjects[i], this.gameObjects[l])) {
					this.gameObjects[i].life -= 1;
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
	
	//draw all the game objects
	for (var i = 0; i < this.gameObjects.length; i++) {
		if (this.gameObjects[i].life === 0) {
			this.gameObjects[i].draw(ctx,0);
		} else {
			this.gameObjects[i].draw(ctx,1);
		}
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
	this.update = function() { };
	this.draw = options.draw || function() { };	
}

var fall = function(gravity) {
	this.vY = gravity;
	this.y += this.vY;
}

var ground = function(worldW, worldH, ctx) {
	var options = {
	type: 'ground',
	x: 0,
	y: worldH-25,
	w: worldW,
	h: 25,
	life: 999,
	draw: drawGround 
	};
	
	return options;
}