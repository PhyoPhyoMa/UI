$(document).ready(function(){

$('input[type=radio][name=input]').change(function(){
		if (this.value == 'zawgyi') {
			console.log("Zawgyi selected");
		}
		else if (this.value == 'unicode') {
			console.log("Uicode selected");
		}
	});

$('input[type=radio][name=output]').change(function(){
	if (this.value == 'zawgyi') {
		console.log("Zawgyi selected");
	}
	else if (this.value == 'unicode') {
		console.log("Unicode selected");
	}
});
});
