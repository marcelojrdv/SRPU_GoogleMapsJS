$(document).ready(function(){
	var map;
	var enderecoAtual = new google.maps.LatLng(-23.5598168, -46.7497878);
	var geocoder = new google.maps.Geocoder();
	
	//Buscar geoLocalizacao
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(getGeoLocalizacao);
	}else {
		area.innerHTML = "Infelizmente este browser não suporta o recurso de geolocalização.";
	}
	
	console.log('map_canvas')
	console.dir(document.getElementById("map_canvas"));
	//Inicializa o mapa
	inicializaMapa();
	
	//Carregar os marcadores registrados
	carregarPontos();
	
	/*$("#btnEndereco").click(function() {
        if($(this).val() != ""){ 
            carregarNoMapa($("#txtEndereco").val());
        }
    });
	
	$("#btnReportar").click(function() {
		if($(this).val() != "") {
        	adicionarPonto($("#txtEndereco").val(), "Acidente", 3);
        }
    });*/

    
	
	/**_____________________________________________________Funções_______________________________________________________**/
    
   
	
	function getGeoLocalizacao(posicao){ 
    	//Não está atribuindo a variável global não sei porque.
    	enderecoAtual = new google.maps.LatLng(posicao.coords.latitude , posicao.coords.longitude);
    	console.log("enderecoAtual"+enderecoAtual);
    }
	
	function inicializaMapa() {
		console.log("enderecoAtual"+enderecoAtual);
    	//enderecoAtual = new google.maps.LatLng(posicao.coords.latitude, posicao.coords.longitude);
		var mapOptions = {
			center: enderecoAtual,
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP //ROADMAP, SATELLITE, HYBRID, TERRAIN //Tipos de Mapas
		};
		map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
		
		//Marca o ponto atual
		marker = new google.maps.Marker({
	        map: map,
	        draggable: true,
	        icon: 'resources/imagens/marcador.png'
	    });
		marker.setPosition(enderecoAtual);
	}

	function carregarPontos() {
		var markers = [];
		var marker;
		var img = 'resources/imagens/outros.png';
		
		console.log('111111111111');
		//Buscamos todos os "endereços" que estão no arquivo pontos.json
		$.getJSON('js/pontos.json', function(pontos) {
			$.each(pontos, function(index, ponto) {
				if (parseInt(ponto.Categoria) == 1) {
					img = 'resources/imagens/acidente.png';
				} else if (parseInt(ponto.Categoria) == 2) {
					img = 'resources/imagens/blitz.png';
				} else if (parseInt(ponto.Categoria) == 3) {
					img = 'resources/imagens/enchente.png';
				} else {
					img = 'resources/imagens/outros.png';
				}
				
				//Switch não funcionou
				/*switch (parseInt(ponto.Categoria)) {
	            	case "1":
	            		img = 'resources/imagens/acidente.png';
	            		break;
	            	case "2":
	            		img = 'resources/imagens/blitz.png';
	            		break;
	            	case "3":
	            		img = 'resources/imagens/enchente.png';
	            		break;
	            	default:
	            		img = 'resources/imagens/outros.png';
	            		break;
				}*/
				
				marker = new google.maps.Marker({
	                position: new google.maps.LatLng(ponto.Latitude, ponto.Longitude),
	                title: "Meu ponto personalizado!",
	                map: map,
	                icon: img
	            });
				markers.push(marker);
				criarCaixaInformacao(marker, String(ponto.Descricao));
	        });
			//marrketCluster para agrupar os marcadores que estão muito próximos conforme o zoom
			var markerCluster = new MarkerClusterer(map, markers);
	    });
	}
	
	function criarCaixaInformacao(marker, conteudo){
		var infowindow = new google.maps.InfoWindow(), marker;
		
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
		    return function() {
		        infowindow.setContent(conteudo);
		        infowindow.open(map, marker);
		    }
		})(marker))
		
		google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
		    return function() {
		        infowindow.close(map,marker);
		    }
		})(marker))
	}
	
	function carregarNoMapa(endereco) {
		geocoder.geocode({ 'address': endereco + ', Brasil', 'region': 'BR' }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
 
                    $('#txtEndereco').val(results[0].formatted_address);
                    $('#txtLatitude').val(latitude);
                    $('#txtLongitude').val(longitude);
 
                    var location = new google.maps.LatLng(latitude, longitude);
                    marker.setPosition(location);
                    map.setCenter(location);
                    map.setZoom(16);
                }
            }
        });
    }
	
	function adicionarPonto(endereco, conteudo, categoria){
		var marcador;
		var img;
		geocoder.geocode({ 'address': endereco + ', Brasil', 'region': 'BR' }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
 
                    $('#txtEndereco').val(results[0].formatted_address);
                    $('#txtLatitude').val(latitude);
                    $('#txtLongitude').val(longitude);
 
                    switch (categoria) {
                    	case 1:
                    		img = 'resources/imagens/outros.png';
                    	case 2:
                    		img = 'resources/imagens/outros.png';
                    	case 3:
                    		img = 'resources/imagens/outros.png';
                    }
                    marcador = new google.maps.Marker({
    	                position: new google.maps.LatLng(latitude, longitude),
    	                title: "Meu ponto personalizado!",
    	                map: map,
    	                icon: img
    	            });
                    
                    criarCaixaInformacao(marcador, conteudo);
                    markers.push(marcador);
                    
                }
            }
        });
		
	}
});

