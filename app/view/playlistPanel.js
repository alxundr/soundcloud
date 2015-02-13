/*
 * File: app/view/playlistPanel.js
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

Ext.define('SoundCloud.view.playlistPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.playlistpanel',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.grid.plugin.DragDrop',
        'Ext.util.Point'
    ],

    itemId: 'playlistPanel',
    ui: 'grayuipanel',
    width: 150,
    layout: 'border',
    bodyBorder: true,
    title: 'Playlist',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    itemId: 'playlistToolbar',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 3,
                            itemId: 'searchPlaylistField',
                            emptyText: 'Search',
                            enableKeyEvents: true
                        },
                        {
                            xtype: 'button',
                            itemId: 'clearPlaylistButton',
                            text: 'clear'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'gridpanel',
                    region: 'center',
                    itemId: 'playlistGrid',
                    store: 'Playlist',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'title',
                            text: 'Title',
                            flex: 4
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'user',
                            text: 'Artist',
                            flex: 1
                        },
                        {
                            xtype: 'gridcolumn',
                            align: 'right',
                            dataIndex: 'duration',
                            text: 'Duration',
                            flex: 1
                        }
                    ],
                    viewConfig: {
                        itemId: 'playlistview',
                        plugins: [
                            Ext.create('Ext.grid.plugin.DragDrop', {
                                dragGroup: 'playlistGridDDGroup',
                                dragText: '{0} selected track{1}',
                                dropGroup: 'playlistGridDDGroup'
                            })
                        ]
                    }
                }
            ]
        });

        me.callParent(arguments);
    }

});