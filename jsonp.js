$(document).ready(function() {
	var url1 = "http://api.flickr.com/services/feeds/photos_public.gne?tags=";
	var url3 = "&tagmode=any&format=json&jsoncallback=?";
	$( "#submit" ).click(function( event ) {
		var url2 = $("#in").val(); 
console.log("lab: "+url2);
		var url = url1+url2+url3;
console.log("url: "+url);
		$.getJSON( url, function( data ) {
console.log(data);
			var i;
			for(i = 0; i < 5; i++){
console.log("data: "+data.item[0].media.m);
				$("body").append("<img src="+data.item[0].m+" />");
			}
		});
	});
});

