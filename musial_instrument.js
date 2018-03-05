var freq = [200, 220, 250, 270];

var playing = false
var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;

var pressedA = false;
var pressedS = false;
var pressedD = false;
var pressedF = false;


function setup() {
	createCanvas(400, 400);
	background(0, 255, 0);
	textAlign(CENTER);

	slider = createSlider(0, 100, 50);
	slider.position(10, 10);
	slider.style('width', '350px');

	oscA = new p5.Oscillator();
	oscA.setType('piano');
	oscA.freq(freq[0]);
	oscA.amp(0);
	oscA.start();

	oscS = new p5.Oscillator();
	oscS.setType('piano');
	oscS.freq(freq[1]);
	oscS.amp(0);
	oscS.start();

	oscD = new p5.Oscillator();
	oscD.setType('piano');
	oscD.freq(freq[2]);
	oscD.amp(0);
	oscD.start();

	oscF = new p5.Oscillator();
	oscF.setType('piano');
	oscF.freq(freq[3]);
	oscF.amp(0);
	oscF.start();
}

function draw() {
	if (playing) {
		noStroke();
		fill(255);
		textSize(30);
		text('A', 90, 165);
	} else {
		background(50, 55, 100);
		stroke(5);
		fill(255);
		strokeWeight(4);
		textSize(30);
		text('Welcome', width / 2, 60);


		rect(65, 100, 50, 100);
		rect(140, 100, 50, 100);
		rect(215, 100, 50, 100);
		rect(290, 100, 50, 100);
		rect(65, 250, 275, 100);

		var sec = second();
		text('Seconds: ' + sec, width / 2, 235);

	}
	if (playingA) {
		noStroke();
		fill(0, 0, 255);
		rect(66, 101, 49, 99);
	} else {
		noStroke();
		fill(0);
		textSize(30);
		text('A', 90, 165);
	}
	if (playingS) {
		noStroke();
		fill(255, 0, 255);
		rect(141, 101, 49, 99);
	} else {
		noStroke();
		fill(0);
		textSize(30);
		text('S', 165, 165);
	}
	if (playingD) {
		noStroke();
		fill(0, 255, 0);
		rect(216, 101, 49, 99);
	} else {
		noStroke();
		fill(0);
		textSize(30);
		text('D', 240, 165);
	}
	if (playingF) {
		noStroke();
		fill(255, 255, 0);
		rect(291, 101, 49, 99);
	} else {
		noStroke();
		fill(0);
		textSize(30);
		text('F', 315, 165);
	}
	if (pressedA) {
		fill(0, 0, 255);
		textSize(random(5, 35));
		text('A', random(75, 330), random(275, 345));
		noStroke();
		fill(255);
		textSize(30);
		text('A', 90, 165);
	}
	if (pressedS) {
		fill(255, 0, 255);
		textSize(random(5, 35));
		text('S', random(75, 330), random(275, 345));
		noStroke();
		fill(255);
		textSize(30);
		text('S', 165, 165);
	}
	if (pressedD) {
		fill(0, 255, 0);
		textSize(random(5, 35));
		text('D', random(75, 330), random(275, 345));
		noStroke();
		fill(255);
		textSize(30);
		text('D', 240, 165);
	}
	if (pressedF) {
		fill(255, 255, 0);
		textSize(random(5, 35));
		text('F', random(75, 330), random(275, 345));
		noStroke();
		fill(255);
		textSize(30);
		text('F', 315, 165);
	}
}

function keyPressed() {
	print("got key press for ", key);
	var osc;
	if (key == 'A') {
		osc = oscA;
		playing = true;
		playingA = true;
		pressedA = true;
	} else if (key == 'S') {
		osc = oscS;
		playing = true;
		playingS = true;
		pressedS = true;
	} else if (key == 'D') {
		osc = oscD;
		playing = true;
		playingD = true;
		pressedD = true;
	} else if (key == 'F') {
		osc = oscF;
		playing = true;
		playingF = true;
		pressedF = true;
	}
	if (osc) {
		osc.amp(0.5, 0.1);
		playing = true;
	}
	if (osc) {
		osc.amp(slider.value() / 1000, slider.value() / 1000);
		playing = true;
	}
}

function keyReleased() {
	print("got key release for ", key);
	var osc;
	if (key == 'A') {
		osc = oscA;
	} else if (key == 'S') {
		osc = oscS;
	} else if (key == 'D') {
		osc = oscD;
	} else if (key == 'F') {
		osc = oscF;
	}
	if (osc) {
		osc.amp(0, 0.5);
		playing = false;
		playingA = false;
		playingS = false;
		playingD = false;
		playingF = false;
		pressedA = false;
		pressedS = false;
		pressedD = false;
		pressedF = false;
	}
}
