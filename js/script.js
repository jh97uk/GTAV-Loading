window.onload = function(){
	document.getElementById('artwork').className = 'trans';
	document.getElementById('character').className = 'trans';
}
$(document).ready(function(){
	var gtaSlides = new JamesSlide("slides");
	gtaSlides.addSlide("assets/backgrounds/mbg.png", "assets/characters/michael.png");
	gtaSlides.addSlide("assets/backgrounds/tbg.png", "assets/characters/trevor.png", 35);
	gtaSlides.addSlide("assets/backgrounds/cb.png", "assets/characters/chop.png", 35);
	gtaSlides.initSlides();

	$(".hiddenCountdown").dsCountDown({
		endDate: new Date("April 14, 2015 00:00:00"),
		theme:"custome"
	});

	document.body.onkeyup = function(e){
		if(e.keyCode == 32){
			if($(".loadingText").css("display") == "block"){
				$(".loadingText").css("display", "none");
				$(".hiddenCountdown").css("display", "block");
			} else{
				$(".loadingText").css("display", "block");
				$(".hiddenCountdown").css("display", "none");
			}
		}
	};
});
