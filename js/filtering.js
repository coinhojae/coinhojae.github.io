$(function(){

	$(".dropdown-menu").on('click', 'li a', function(){
		$(".btn:first-child").text($(this).text());
		console.log($(".btn:first-child").text($(this).text()));
		$(".btn:first-child").val($(this).text());
		console.log($(".btn:first-child").val($(this).text()));
	});

});
