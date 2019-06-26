Ext.define('SRPU.controller.Main', {
	extend: 'Ext.app.Controller',
	config: {
        refs: {
        	theButton: '#botaoBuscar'
        },
        control: {
        	theButton: {
        		tap: 'botaoBuscarClick'
        	}
        },
    },
    
    init: function () {
    	console.log("Main controller init!");
    },
    
    launch: function () {
    	console.log("Main controller launch!");
    },
    
    botaoBuscarClick: function (botao) {
    	console.log('Buscando endereço...');
    	var mainCard = Ext.ComponentQuery.query('#mainCard')[0];
    	var endereco = Ext.ComponentQuery.query('#inputEndereco')[0].getValue();
    	
    	//Chamar o arquivo 'js/mapa.js' aqui pois depende do carregamento do main para carregar o mapa
        var scr = document.createElement("script");
		scr.setAttribute('src', 'js/mapa.js');
		document.getElementsByTagName('body')[0].appendChild(scr); 
    	carregarNoMapa(endereco);
        
    	
    	mainCard.setActiveItem(0);
    }
});