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