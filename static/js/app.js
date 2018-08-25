$(document).ready(function(){
	$('form').on('submit', funtion(event){
		$.ajax({
			type: "POST",
			url: "/convert",
			success: functiion(response){
				console.log(response);
			},
			data: {
				myinput: $('input[name=input]:checked').val(),
				myoutput: $('input[name=output:checked').val(),
				source: $('#source').val()
			}
		})
		.done(function(data){
			if(data.error){
				// Do something
			}
			else{
				console.log("ehlo");
				$("#destination").val(data.output).show();
			}
		});
		event.preventDefault();
	});
});
