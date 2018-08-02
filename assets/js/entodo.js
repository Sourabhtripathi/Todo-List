//Check of specific events by clicking
$("ul").on("click", "li" , function(){
	$(this).toggleClass("completed")
})
// Click on X to delete Todo
$("ul").on("click", "span" , function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove(); 
	});
	event.stopPropagation();
})
$("input").keypress(function(event){
	if (event.which === 13){
		// getting new todo
		var TodoText = $(this).val()
		// Clear out the input
		$(this).val("")
		// adding the new todo to the list
		$("ul").append("<li>" + "<span><i class='fas fa-trash'></i> </span>" + TodoText + "</li>")
	}
})
$(".fa-plus").click(function(){
	$("input").fadeToggle(400);
})