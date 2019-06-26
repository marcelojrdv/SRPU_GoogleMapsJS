Ext.define('SRPU.view.main.Home', {
    extend: 'Ext.Panel',
    alias: 'widget.home',
    config: {
    	title: 'Home',
    	iconCls: 'home',
    	styleHtmlContent: true,
    	scrollable: false,
    	items: [{
    	    docked: 'top',
    	    xtype: 'titlebar',
    	    title: 'Mapa'
    	},{
    		xtype: 'panel',
    		html: [
    			'<div style ="margin-left:0px; margin-top:0px; width:100%; height:100%">',
    					'<div id="map_canvas" style ="width:100%; height: 1000px"></div>',
    			'</div>'
    	       ].join(""),
    	}],
    },
	
});
