Ext.define('SRPU.view.main.Buscar', {
    extend: 'Ext.Panel',
    alias: 'widget.buscar',
    config: {
    	title: 'Buscar',
        iconCls: 'search',
        itemId: 'atalhoBuscar',
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Buscar'
            },{
            	xtype: 'panel',
            	items: [{
                    xtype: 'fieldset',
                    items: [
                        {
                            xtype: 'textfield',
                            name : 'endereco',
                            label: 'Endere&ccedil;o'
                        }
                    ]
                },{
                	xtype: 'toolbar',
            	    docked: 'bottom',
            	    layout: { pack: 'center' },
            	    items: [
            	        {
            	            xtype: 'button',
            	            text: 'Buscar',
            	            handler: function() {
            	            	var atalhoMapa = Ext.ComponentQuery.query('#atalhoHome');
            	            	atalhoMapa.fireEvent('click');
            	            	//Ext.ComponentQuery.query('#atalhoHome').fireEvent('click');
            	            }
            	        },
            	    ]
                }]
            }/*,
            {
                xtype: 'video',
                url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
            }*/
        ]
    },
	
});
