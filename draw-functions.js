var drawCatcher = function (ctx, frame) {
	var front;
	var back; 
	
	switch(frame) {
		case 0:
			front = 'rgb(51,29,8)';
			back = 'rgb(24,15,4)';
			break;
		case 2:
			front = 'rgb(212,176,140)';
			back = 'rgb(176,126,76)';
			break;
		case 1:
			front = 'rgb(176,126,76)';
			back = 'rgb(133,91,53)';
			break;
	}

	//draw top
	ctx.fillStyle = front;
	ctx.beginPath();
	ctx.moveTo(this.x,this.y);
	ctx.lineTo(this.x,this.y + this.h*.5);
	ctx.lineTo(this.x + this.w*.33, this.y + this.h*.5);
	ctx.lineTo(this.x + this.w*.33, this.y + this.h*.33);
	ctx.lineTo(this.x + this.w, this.y + this.h*.18);
	ctx.lineTo(this.x + this.w*.3, this.y + this.h*.18);
	ctx.lineTo(this.x + this.w*.3, this.y + this.h*.14);
	ctx.lineTo(this.x + this.w*.33, this.y + this.h*.14);
	ctx.lineTo(this.x + this.w*.33, this.y);
	ctx.closePath();
	ctx.fill();
	
	drawCatcherLeftLeg(ctx,back,this.x,this.y,this.w, this.h);
	drawCatcherRightLeg(ctx,front,this.x,this.y,this.w, this.h);
}

function drawCatcherLeftLeg(ctx,fillColor, x, y, w, h) {
	//left leg
	ctx.fillStyle = fillColor;
	ctx.beginPath();
	ctx.moveTo(x,y + h*.5);//back of hip
	ctx.lineTo(x,y + h*.7);//back of knee
	ctx.lineTo(x - w*.33,y + h);//to toe
	ctx.lineTo(x + w*.33,y + h*.7);//front of knee
	ctx.lineTo(x + w*.33,y + h*.5);//front hip
	ctx.closePath();
	ctx.fill();
}

function drawCatcherRightLeg(ctx,fillColor,x,y,w,h){
	ctx.fillStyle = fillColor;
	ctx.beginPath();
	ctx.moveTo(x,y + h*.5);
	ctx.lineTo(x,y + h*.6);
	ctx.lineTo(x + w*.38, y + h*.74);//back of knee
	ctx.lineTo(x + w*.66, y + h);//to Toe
	ctx.lineTo(x + w*.66, y + h*.7);//front of knee
	ctx.lineTo(x + w*.33, y + h*.5);//hip flexor
	ctx.closePath();
	ctx.fill();
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

var drawGround = function(ctx) {
	ctx.fillStyle = 'rgb(79,62,25)';
	ctx.fillRect(this.x,this.y,this.w,this.h);
}