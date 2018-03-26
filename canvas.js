window.onload=function(){
	var canvas=document.getElementById('myCanvas');

	canvas.width=1000;
	canvas.height=480;
	var c=canvas.getContext('2d');
	var vid = document.getElementById("planeaudio");
	vid.volume = 0.0;//0.05
	var vid2 = document.getElementById("trainaudio");
	vid2.volume = 0.0;//0.2

	var loop;
		//for cloud
		
		var x=300;
		var y=800;
		var tf1=-70;
		var tf2=200;
		var tf3=510;
		var tf4=800;
		var gra=0;
		var tn1=0;
		var tn2=400;
		var tn3=800;
		var fen=0;
		var gf=0;
		var a=150;
		var b=150;
		var ma=50;
		var mb=50;
		var alpha=0;
		var planex=1000;
		var planey=100;
		var alpha=0.0;
		var realpha=1;
		var sx=-100;
		var sy=-50;
		var mx=-5200;
		var my=-50;
		loop=function(){
			x+=0.1;
			y+=0.1;
			tf1+=.5;
			tf2+=.5;
			tf3+=.5;
			tf4+=.5;
			gra+=.7;
			fen+=1;
			gf+=1;
			tn1+=1;
			tn2+=1;
			tn3+=1;
			planex-=2;
			planey-=0.2;
			sx+=0.1;
			sy+=0.02;
			a-=0.001;
			b-=0.001;
			
			alpha+=0.00007;
			mx+=0.5;
			my+=0.01;


			c.save();
			c.beginPath();
			c.clearRect(0, 0, c.canvas.width, c.canvas.height);

			//for the sky
			c.fillStyle='#75CFF2';
			c.fillRect(0,0,1000,265);
			c.fill();

			//sun
			var sun =document.getElementById('sun');
			c.drawImage(sun,sx,sy,a,b);
			
			//moon
			var moon =document.getElementById('moon');
			c.drawImage(moon,mx,my,ma,mb);
			
			var plane = document.getElementById('plane');
			c.save();
			c.rotate(5*Math.PI/180);
			c.drawImage(plane,planex,planey);
			c.restore();
			
			//animate cloud
			var cloud = document.getElementById('cloud');
			c.drawImage(cloud,x,0);
			c.drawImage(cloud,y,0);

			var hill = document.getElementById('hill');
			c.drawImage(hill,gra,175,hill.width,hill.height);
			c.drawImage(hill,gra-1000,175,hill.width,hill.height);
			//for tree far
			var treeFar = document.getElementById('treeFar');
			c.drawImage(treeFar,tf1,115);
			c.drawImage(treeFar,tf2,115);
			c.drawImage(treeFar,tf3,115);
			c.drawImage(treeFar,tf4,115);

			var grassfield=document.getElementById('grassf');
			c.drawImage(grassfield,gf,265,1000,165);
			c.drawImage(grassfield,gf-1000,265,1000,165);
			
			//for the road
			c.fillStyle='#4B4B4D';
			c.fillRect(0,430,1000,50);
			c.fill();

			var grass = document.getElementById('grass');
			c.drawImage(grass,gra,165,grass.width,grass.height);
			c.drawImage(grass,gra-1000,165,grass.width,grass.height);
			
			//nearby tree
			var treeNear = document.getElementById('treeNear');
			c.drawImage(treeNear,tn1,216);
			c.drawImage(treeNear,tn2,216);
			c.drawImage(treeNear,tn3,216);
			
			var fence = document.getElementById('fenceID');
			c.drawImage(fence,fen,385);
			c.drawImage(fence,fen-1000,385);
			
			


			c.save();
			c.globalAlpha=alpha;
			var grd2=c.createLinearGradient(0,480,1000,480);
			grd2.addColorStop(0,"#1C2833");
			grd2.addColorStop(1,"#FFFFFF");
			// Fill with gradient
			c.fillStyle="#000000";
			c.fillRect(0,0,1000,480);
			c.restore();
			
			c.closePath();
			c.restore();
			if(sx>=1180){sx=-100; sy=-50;}
			if(sx>=1180){a=90; b=90;}
			if(mx>=1000){mx=-5050; my=-50;}
			if(alpha>=0.9){alpha=0;}
			if(y>1000){y=-154;}//first cloud
			if(x>1000){x=-154;}//second cloud
			if(tf1>1000){tf1=-148;}//far first tree
			if(tf2>1000){tf2=-148;}//far second tree
			if(tf3>1000){tf3=-148;}//far third tree
			if(tf4>1000){tf4=-148;}//far forth tree
			if(gra>1000){gra=0;}//for grass
			if(fen>1000){fen=0;}//for fence
			if(gf>1000){gf=0;}//for grassfield
			if(planex<=-150 && planey<=0){planex=1000; planey=100;}
			if(tn1>1000){tn1=-200;}//near free 1
			if(tn2>1000){tn2=-200;}//near free 2
			if(tn3>1000){tn3=-200;}//near free 3
			window.requestAnimationFrame(loop);
		};

	window.requestAnimationFrame(loop);
}