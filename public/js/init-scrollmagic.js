var makeController = function(){
var controller = new ScrollMagic.Controller();
$(function() {
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300})
.setPin("#pin1")
.addIndicators({name: "1 (duration: 300)"})
.addTo(controller);
})
return controller;
}

$(".background").css("opacity", 0);
$("body").css("margin", 0);
