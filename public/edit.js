$(document).ready(function(){
	$("button").on("click", function(event){
		event.preventDefault()
		console.log('clicked')

		var title = $("#title").val()
		var director = $("#director").val()
		var year = $("#year").val()
		var rating = $("#rating").val()
		var poster = $("#poster").val()

		$.ajax({
			url:'/update',
			type: 'PUT',
			data: {
				"name": title,
				"director": director,
				"year": year,
				"rating": rating,
				"poster": poster
			},
			success: function(result){
				console.log('PUTTTING')
				console.log(data)
			}
		})
	})
});