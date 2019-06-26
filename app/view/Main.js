Ext.define('SRPU.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
        itemId: 'mainCard',
        //layout: 'card',
        //animation: 'slide',
        items: [
            {
                title: 'Home',
                iconCls: 'home',
                styleHtmlContent: true,
                scrollable: false,

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Mapa',
                    items : [{
                    	xtype: 'button',
                    	text: 'Endere&ccedil;o Atual',
                    	style: 'float: left;',
                    	handler: function (){
                    		console.log("End. Atual");
                    	}
                    },{
                    	xtype: 'button',
                    	text: 'Atualizar',
                    	style: 'float: right;',
                    	//iconAlign: 'right',
                    	//left: '390px',
                    	handler: function (){
                    		console.log("Atualizar");
                    	}
                    }]
                },{
                	margin: '-20 -20 -0 -20',
                	xtype: 'panel',
                	html: [
       					'<div style ="margin-left:0px; margin-top:0px; width:100%; height:100%">',
       							'<div id="map_canvas" style ="width:100%; height: 750px"></div>',
       					'</div>'
                       ].join(""),
                }],
                
                listeners : {
            	},
            },
            {
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
                                    itemId: 'inputEndereco',
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
                    	            id: 'botaoBuscar'
                    	        },
                    	    ]
                        }]
                    }
                ]
            },
            {
                title: 'Reportar',
                iconCls: 'action',
                itemId: 'atalhoReportar',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Reportar'
                    },{
                    	xtype: 'panel',
                    	items: [{
                            xtype: 'fieldset',
                            itemId: 'formBuscar',
                            items: [
                                {
                                    xtype: 'textfield',
                                    name : 'endereco',
                                    label: 'Endere&ccedil;o'
                                },
                                {
                                    xtype: 'selectfield',
                                    name : 'tipoproblema',
                                    label: 'Tipo',
                                    options: [
                                        {text: 'Primeiro',  value: '1'},
                                        {text: 'Segundo', 	value: '2'},
                                        {text: 'Terceiro',  value: '3'},
                                        {text: 'Outros',  	value: '4'}
                                    ]
                                },
                                {
                                    xtype: 'textfield',
                                    name : 'descricao',
                                    label: 'Descri&ccedil;&atilde;o'
                                },
                                {
                                	xtype: 'toolbar',
                            	    docked: 'bottom',
                            	    layout: { pack: 'center' },
                            	    items: [
                            	        {
                            	            xtype: 'button',
                            	            text: 'Reportar',
                            	            handler: function() {
                            	            	
                            	            	Ext.Msg.alert('Sucesso', 'Endere&ccedil;o reportado!');
                            	            	Ext.ComponentQuery.query('#mainCard')[0].setActiveItem(0);
                            	            	//formPanel.getValues()
                            	            	
                            	            	/*formPanel.setValues({
                            	                    name: 'Ed',
                            	                    email: 'ed@sencha.com',
                            	                    password: 'secret'
                            	                });*/                	              
                            	            }
                            	        },
                            	        {
                            	            xtype: 'button',
                            	            text: 'Limpar',
                            	            handler: function() {
                            	            	console.log(this.up('fieldset'));
                            	                //var formPanel = this.up('fieldset');
                            	                //formPanel.reset();
                            	            }
                            	        }
                            	    ]
                                }
                            ]
                        }]
                    }
                ]
            }
        ]
    }
 
});
