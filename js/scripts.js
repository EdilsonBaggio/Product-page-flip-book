$(document).ready(function() {

$(".bt_comprar").click(function(){
$(".livro_box").css({"display":"block"});
});

$(".fechar").click(function(){
$(".livro_box").css({"display":"none"});
});


$('.girar').click(function() {
if($(".book-2").hasClass('bk-bookdefault'))
{
     $(".book-2").addClass('bk-viewback').removeClass('bk-bookdefault');
}
else
{
     $(".book-2").addClass('bk-bookdefault').removeClass('bk-viewback');
}
});

});

(function(document) {
var shareButtons = document.querySelectorAll(".st-custom-button[data-network]");
for(var i = 0; i < shareButtons.length; i++) {
var shareButton = shareButtons[i];

shareButton.addEventListener("click", function(e) {
var elm = e.target;
var network = elm.dataset.network;

console.log("share click: " + network);
});
}
})(document);