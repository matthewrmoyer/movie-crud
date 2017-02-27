$(document).ready(function(){
	$('button').on('click', function(event){
		event.preventDefault()
		console.log('click')
		console.log(this.className)




		$.ajax({
			url:'/delete',
			type: 'DELETE',
			data: {
				"name": this.className
			},
			success: function(result){
				console.log('DELETING')
				console.log(data)
			}
		})
	})
});