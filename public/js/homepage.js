$(".right_add").click(function() {
	window.location.href = "inForMation.html"
});
$("#quit").click(function() {
	sessionStorage.clear();
	window.location.href = "../index.html"
});
$("#header_p").click(function() {
	$(".control_mask").css("display", "block")
});
$("#submit_tx").click(function() {
	$(".control_mask").css("display", "none")
});
$("#controlClose").click(function() {
	$(".control_mask").css("display", "none")
});
$(".menu_control").mouseover(function() {
	$("#alter").attr("src", "../img/down.png")
});
$(".menu_control").mouseout(function() {
	$("#alter").attr("src", "../img/up.png")
});
$(".menu_control").hover(function() {
	$(".submenu").slideDown();
},function(){
	$(".submenu").slideUp()
});
$("#switchover").click(function() {
	$(".header_z").css("display", "block")
});
$("#loginClose").click(function() {
	$(".header_z").css("display", "none")
});