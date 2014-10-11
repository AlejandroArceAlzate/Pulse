$(function(){

	$("footer .logos").load("logos_footer.html #maestrosdelweb");

	$.get("usuario.json",function(info){
		var avatar   = new image();
		avatar.src   = info.avatar;
		avatar.title = info.nombre+" "+ info.apellido;


		$("#avatar").append(avatar);
	});
});

var base_url = "http://query.yahooapis.com/v1/public/yql?";

function obtenerGeoInformacion(lat, lon) 
{
	var query = 'SELECT * FROM geo.placefinder WHERE text="'+lat+', '+lon+'" AND gflags="R"';
	query = encodeURIComponent(query);

	$.ajax({
		url: base_url+"q="+query,
		dataType : 'jsonp',
		jsonpCallback: 'procesarGeoInfo',
		data: {
			format: 'json'
		}
	});
}