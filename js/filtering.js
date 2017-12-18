$(".dropdown-toggle li a").click(function(){
	$(this).parents(".dropdown-toggle").find('.btn').html($(this).text() + ' <span class="caret"></span>');
	$(this).parents(".dropdown-toggle").find('.btn').val($(this).data('value'));
	console.log("$(this).text()");
	console.log("kjlee");
});
