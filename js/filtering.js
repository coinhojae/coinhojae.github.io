$(".dropdown-menu li a").click(function(){
	$(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
	$(this).parents(".dropdown").find('.btn').val($(this).data('value'));
	console.log($(this).text());
	console.log($(this).data('value'));
});
