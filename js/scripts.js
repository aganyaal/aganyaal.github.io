function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
$(document).ready(function(){
	$("body").addClass("gifimage");
	$(".firstdisplay").hide();
	$(".firstdisplay").fadeIn(4000);
	
});