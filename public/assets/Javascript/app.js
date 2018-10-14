$("#scrape").on("click", function(){
	$.ajax({
		method: "GET",
		url: "/scrape",
	}).done(function(data){
		console.log(data)
		window.location = "/"
	})
});


//still working on getting this working. 