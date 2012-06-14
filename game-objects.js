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
		this.gameObjects[i].update(this.gravity);
	}
}

gameWorld.prototype.drawGame = function(ctx) {
	//clear the screen
	ctx.clearRect(0,0,this.w,this.h);
	
	//draw all the game objects
	for (var i = 0; i < this.gameObjects.length; i++) {
		this.gameObjects[i].draw(ctx,1);
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
	this.draw = function() { };	
}

var drawBanana = function(ctx, frame) {
	ctx.fillStyle = 'rgb(255,255,51)';
	switch(frame)
	{
		case 0:
			ctx.fillRect(this.x,this.y+this.h*.6,this.w,this.h*.4);
			break;
		case 1:
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(this.x, this.y + this.h/2);
			ctx.lineTo(this.x + this.w, this.y + this.h);
			ctx.lineTo(this.x + this.w*.4, this.y + this.h/2);
			ctx.lineTo(this.x, this.y);
			ctx.fill();
			break;
	};
}

var drawApple = function(ctx, frame) {
	ctx.fillStyle = 'rgb(235,32,57)';
	switch(frame)
	{
		case 0:
			ctx.beginPath();
			ctx.arc(this.x - this.w, this.y - this.w,this.w/2,0,Math.PI*2,true);
			ctx.fill();
			
			ctx.beginPath();
			ctx.arc(this.x - this.w, this.y + this.w,this.w/2,0,Math.PI*2,true);
			ctx.fill();
			
			ctx.beginPath();
			ctx.arc(this.x + this.w, this.y - this.w,this.w/2,0,Math.PI*2,true);
			ctx.fill();
			
			ctx.beginPath();
			ctx.arc(this.x + this.w, this.y + this.w,this.w/2,0,Math.PI*2,true);
			ctx.fill();
			break;
		case 1:
			ctx.fillStyle = 'rgb(235,32,57)';
			ctx.beginPath();
			ctx.arc(this.x, this.y,this.w,0,Math.PI*2,true);
			ctx.fill();
			break;
	};
}

var fall = function(gravity) {
	this.vY = gravity;
	this.y += this.vY;
}