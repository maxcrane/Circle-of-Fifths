function CircleOfFifths() {
	this.currentTonic = "C";
	this.currentMode = "Ionian (major)";

	this.tonics = ["C", "A"];
	this.modes = ["Ionian (major)"];
	
	this.tonicNotesMap = {
		"C" : ["C", "G", "D", "A", "E", "B", "G♭", "D♭", "A♭", "E♭", "B♭", "F"],
		"A" : ["C", "G", "D", "A", "E", "B", "F♯", "C♯", "G♯", "E♭", "B♭", "F"]
	}
	
	this.tonicToLydianPosition = {
		"C" : 9,
		"A" : 0
	}

	this.modeOffsetMap = {
		"Ionian (major)" : -1
	}

	this.getNotes = function(){
		return this.tonicNotesMap[this.currentTonic];
	}

	//used by the sketch to determine where to start drawing the major arc
	//index starts from 0 which is the rightmost note (A by default) of the circle and goes clockwise to 11
	this.getArcPostStart = function(){
		var position =  this.tonicToLydianPosition[this.currentTonic] + this.modeOffsetMap[this.currentMode];
		return position < 0 ? 12 + position : position;
	}
}