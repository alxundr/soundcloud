/*
 * File: app/view/uploadPanel.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('SoundCloud.view.uploadPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.uploadpanel',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    itemId: 'uploadPanel',
    layout: 'border',
    title: 'Upload',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'connectbtn',
                            text: 'connect'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});