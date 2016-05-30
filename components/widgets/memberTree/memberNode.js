"use strict";

var NodeModel = function(nodeId) {
    this.id = nodeId;
    this.pid = -1;
    this.row = 0;
    this.col = 0;
    this.left = "";
    this.top = "";
    this.content = "";
    this.width = 0;
    this.children = [];
    this.endPoints = {
        top: {
            id: null,
            el: null
        },
        bottom: {
            id: null,
            el: null
        }
    };

    this.update = function(data) {
        if (data.id !== undefined) {
            this.id = data.id;
        }
        if (data.pid !== undefined) {
            this.pid = data.pid;
        }
        if (data.content !== undefined) {
            this.content = data.content;
        }
        if (data.row !== undefined) {
            this.row = data.row;
        }
        if (data.col !== undefined) {
            this.col = data.col;
        }
        if (data.left !== undefined) {
            this.left = data.left;
        }
        if (data.top !== undefined) {
            this.top = data.top;
        }
        if (data.content !== undefined) {
            this.content = data.content;
        }
        if (data.width !== undefined) {
            this.width = data.width;
        }
        if (data.children !== undefined) {
            this.children = data.children;
        }
        if (data.endPoints !== undefined) {
            if (data.endPoints.top !== undefined) {
                if (data.endPoints.top.id !== undefined) {
                    this.endPoints.top.id = data.endPoints.top.id;
                }
                if (data.endPoints.top.el !== undefined) {
                    this.endPoints.top.el = data.endPoints.top.el;
                }
                if (data.endPoints.top.connection !== undefined) {
                    this.endPoints.top.connection = data.endPoints.top.connection;
                }
            }
            if (data.endPoints.bottom !== undefined) {
                if (data.endPoints.bottom.id !== undefined) {
                    this.endPoints.bottom.id = data.endPoints.bottom.id;
                }
                if (data.endPoints.bottom.el !== undefined) {
                    this.endPoints.bottom.el = data.endPoints.bottom.el;
                }
                if (data.endPoints.bottom.connection !== undefined) {
                    this.endPoints.bottom.connection = data.endPoints.bottom.connection;
                }
            }
        }
    };

    this.getEndpointSetting = function() {
        return {
            endpoint: [
                "Dot", { 
                    cssClass: "endpointClass", 
                    radius: 10, 
                    hoverClass: "endpointHoverClass" 
                } 
            ],
            paintStyle: { 
                fillStyle: "#795548"
            },
            hoverPaintStyle: {
                strokeStyle: "#795548"
            },
            isSource: true,
            isTarget: true,
            maxConnections: -1,
            connector: [ "Bezier", { curviness: 50 } ],
            connectorStyle: {
            gradient: {
                stops: [
                    [0, "#795548"],
                    [0.5, "#795548"],
                    [1, "#795548"]
                ]},
                lineWidth: 5,
                strokeStyle: "#795548"
            },
            connectorHoverStyle: {
                strokeStyle: "#795548"
            },
            connectorOverlays: [
                ["Arrow", { fillStyle: "#795548", width: 15, length: 15 } ]
            ]
        };
    }
}

module.exports = NodeModel;