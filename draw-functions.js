var drawCatcher = function (ctx, frame) {
	var front;
	var back; 
	
	switch(frame) {
		case 0:
			front = 'rgb(51,29,8)';
			back = 'rgb(24,15,4)';
			drawCatcherTop(ctx,back,this.x,this.y,this.w, this.h);
			drawCatcherLeftLeg(ctx,back,this.x,this.y,this.w, this.h);
			drawCatcherRightLeg(ctx,front,this.x,this.y,this.w, this.h);
			break;
		case 3:
			front = 'rgb(212,176,140)';
			back = 'rgb(176,126,76)';
			drawCatcherTop(ctx,back,this.x,this.y,this.w, this.h);
			drawCatcherLeftLeg(ctx,back,this.x,this.y,this.w, this.h);
			drawCatcherRightLeg(ctx,front,this.x,this.y,this.w, this.h);
			break;
		case 2:
			front = 'rgb(201,201,201)';
			back = 'rgb(140,140,140)';
			drawCatcherTop(ctx,front,this.x,this.y,this.w, this.h);
			drawCatcherRightLeg(ctx,back,this.x,this.y,this.w, this.h);
			drawCatcherLeftLeg(ctx,front,this.x,this.y,this.w, this.h);
			break;
		case 1:
			front = 'rgb(201,201,201)';
			back = 'rgb(140,140,140)';
			drawCatcherTop(ctx,front,this.x,this.y,this.w, this.h);
			drawCatcherLeftLeg(ctx,back,this.x,this.y,this.w, this.h);
			drawCatcherRightLeg(ctx,front,this.x,this.y,this.w, this.h);
			break;
	}
	
}

function drawCatcherTop(ctx, fillColor, x, y, w, h) {
	ctx.fillStyle = fillColor;
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x,y + h*.5);
	ctx.lineTo(x + w*.33, y + h*.5);
	ctx.lineTo(x + w*.33, y + h*.33);
	ctx.lineTo(x + w, y + h*.18);
	ctx.lineTo(x + w*.3, y + h*.18);
	ctx.lineTo(x + w*.3, y + h*.14);
	ctx.lineTo(x + w*.33, y + h*.14);
	ctx.lineTo(x + w*.33, y);
	ctx.closePath();
	ctx.fill();
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

var drawForrest = function(ctx,w,h){
	//second canopy
	ctx.fillStyle = 'rgba(31,103,41,0.8)';
	ctx.fillRect(0,0,w,64);

	//trees row 1
	ctx.fillStyle = 'rgb(160,101,48)';
	ctx.fillRect(100,0,52,h);
	//branch
	ctx.beginPath();
	ctx.moveTo(100, 112);
	ctx.lineTo(42, 0);
	ctx.lineTo(54, 0);
	ctx.lineTo(100, 92);
	ctx.closePath();
	ctx.fill();
			
	ctx.fillRect(212,0,46,h);
	ctx.fillRect(322,0,32,h);
	ctx.fillRect(470,0,52,h);

	//row 2
	ctx.fillStyle = 'rgba(160,101,48,0.5)';
	ctx.fillRect(52,0,16,h);
	ctx.fillRect(276,0,14,h);
	ctx.fillRect(412,0,18,h);
}

var drawCanopy = function(ctx){
	ctx.fillStyle = 'rgb(43,142,60)';
	ctx.fillRect(this.x,this.y,this.w,this.h);
}

function drawWalker(ctx, x, y, w, h){
	
	
	//draw back legs
	ctx.fillStyle = 'rgb(8,79,150)';
	ctx.beginPath();
	ctx.moveTo(x + w*.1, y + h*.4);
	ctx.lineTo(x + w*.3, y + h*.6);
	ctx.lineTo(x + w*.3, y + h);	//rear first foot
	ctx.lineTo(x + w*.4, y + h*.6);
	ctx.lineTo(x + w*.5, y + h*.4);
	ctx.closePath();
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(x + w*.5, y + h*.4);
	ctx.lineTo(x + w*.9, y + h*.75);
	ctx.lineTo(x + w, y +h);		//rear second foot
	ctx.lineTo(x + w, y + h*.75);
	ctx.lineTo(x + w*.8, y + h*.4);
	ctx.closePath();
	ctx.fill();
	
	//draw front legs
	ctx.fillStyle = 'rgb(49,147,245)';
	ctx.beginPath();
	ctx.moveTo(x,y + h*.2);			//back of hip
	ctx.lineTo(x + w*.1,y + h*.15);
	ctx.lineTo(x + w*.1, y + h*.4);	//to first leg
	ctx.lineTo(x, y + h*.6);
	ctx.lineTo(x, y + h);			//first foot
	ctx.lineTo(x + w*.1, y + h*.6);	//back of first knee
	ctx.lineTo(x + w*.5, y + h*.45);
	//second leg
	ctx.lineTo(x + w*.7, y + h*.75);
	ctx.lineTo(x + w*.7, y + h);	//second foot
	ctx.lineTo(x + w*.8, y + h*.75);
	ctx.lineTo(x + w*.8, y + h*.3);	//back of hip
	ctx.lineTo(x + w*.5, y + h*.2);
	ctx.lineTo(x + w*.4, y + h*.1);
	ctx.lineTo(x + w*.2, y);
	ctx.lineTo(x + w*.1, y + h*.1);
	ctx.closePath();
	ctx.fill();
}
