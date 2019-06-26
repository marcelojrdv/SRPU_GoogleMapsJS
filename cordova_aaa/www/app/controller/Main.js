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
    	
    	console.log(endereco);
        //carregarNoMapa(endereco);
        mainCard.setActiveItem(0);
    }
});