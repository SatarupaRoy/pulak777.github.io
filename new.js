var rightconnection=false;
var datapoints1 = [];
jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
               
            });
        },
         endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,255)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint);
        },

      

    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "littledot.png" } ],
        Connector: [ "Bezier", { curviness: +90 } ],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("ld1"),
            e2 = prepare("ld2"),
            e3 = prepare("ld3"),
            e4 = prepare("ld4"),
            e5 = prepare("ld5"),
            e6 = prepare("ld6"),
            e7 = prepare("ld7"),
            e8 = prepare("ld8"),
            e9 = prepare("ld9"),
            e10 = prepare("ld10"),
            e11 = prepare("ld11"),
            e12 = prepare("ld12"),
            e13 = prepare("ld13"),
            e14 = prepare("ld14"),
            e15 = prepare("ld15"),
            e16 = prepare("ld16"),
            e17 = prepare("ld17"),
            e18 = prepare("ld18"),
            e19 = prepare("ld19"),
            e20 = prepare("ld20"),
            e21 = prepare("ld21"),
            e22 = prepare("ld22"),
            e23 = prepare("ld23"),
            e24 = prepare("ld24"),
            e25 = prepare("ld25"),
            e26 = prepare("ld26"),
            
           
            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {
        var correct_connections_1_12 = [
            {
                "source": "ld1",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld1"
            }
        ];

        var correct_connections_2_13 = [
            {
                "source": "ld2",
                "target": "ld13"
            },
    
            {
                "source": "ld13",
                "target": "ld2"
            }
        ];
        var correct_connections_3_14 = [
            {
                "source": "ld14",
                "target": "ld3"
            },
    
            {
                "source": "ld3",
                "target": "ld14"
            }
        ];
        var correct_connections_4_18 = [
            {
                "source": "ld4",
                "target": "ld18"
            },
    
            {
                "source": "ld18",
                "target": "ld4"
            }
        ];
        var correct_connections_5_19 = [
            {
                "source": "ld19",
                "target": "ld5"
            },
    
            {
                "source": "ld5",
                "target": "ld19"
            }
        ];

        var correct_connections_6_18 = [
            {
                "source": "ld6",
                "target": "ld18"
            },
    
            {
                "source": "ld18",
                "target": "ld6"
            }
        ];
        var correct_connections_7_8 = [
            {
                "source": "ld7",
                "target": "ld8"
            },
    
            {
                "source": "ld8",
                "target": "ld7"
            }
        ];
        var correct_connections_9_15 = [
            {
                "source": "ld9",
                "target": "ld15"
            },
    
            {
                "source": "ld15",
                "target": "ld9"
            }
        ];
        var correct_connections_10_18 = [
            {
                "source": "ld10",
                "target": "ld18"
            },
    
            {
                "source": "ld18",
                "target": "ld10"
            }
        ];
        var correct_connections_11_17 = [
            {
                "source": "ld17",
                "target": "ld11"
            },
    
            {
                "source": "ld11",
                "target": "ld17"
            }
        ];
        var correct_connections_16_19 = [
            {
                "source": "ld16",
                "target": "ld19"
            },
    
            {
                "source": "ld19",
                "target": "ld16"
            }
        ];
        var correct_connections_17_20 = [
            {
                "source": "ld17",
                "target": "ld20"
            },
    
            {
                "source": "ld20",
                "target": "ld17"
            }
        ];
        var correct_connections_21_24 = [
            {
                "source": "ld21",
                "target": "ld24"
            },
    
            {
                "source": "ld24",
                "target": "ld21"
            }
        ];
        var correct_connections_22_25 = [
            {
                "source": "ld22",
                "target": "ld25"
            },
    
            {
                "source": "ld25",
                "target": "ld22"
            }
        ];
        var correct_connections_23_26 = [
            {
                "source": "ld23",
                "target": "ld26"
            },
    
            {
                "source": "ld26",
                "target": "ld23"
            }
        ];

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld13"
            },
    
            {
                "source": "ld13",
                "target": "ld2"
            },
            {
                "source": "ld14",
                "target": "ld3"
            },
    
            {
                "source": "ld3",
                "target": "ld14"
            },
            {
                "source": "ld4",
                "target": "ld18"
            },
    
            {
                "source": "ld18",
                "target": "ld4"
            },
            {
                "source": "ld19",
                "target": "ld5"
            },
            {
                "source": "ld5",
                "target": "ld19"
            },
            {
                "source": "ld6",
                "target": "ld18"
            },
            {
                "source": "ld18",
                "target": "ld6"
            },
            {
                "source": "ld7",
                "target": "ld8"
            },
            {
                "source": "ld8",
                "target": "ld7"
            },
            {
                "source": "ld9",
                "target": "ld15"
            },
            {
                "source": "ld15",
                "target": "ld9"
            },
            {
                "source": "ld10",
                "target": "ld18"
            },
            {
                "source": "ld18",
                "target": "ld10"
            },
            {
                "source": "ld17",
                "target": "ld11"
            },
            {
                "source": "ld11",
                "target": "ld17"
            },
            {
                "source": "ld16",
                "target": "ld19"
            },
            {
                "source": "ld19",
                "target": "ld16"
            },
            {
                "source": "ld17",
                "target": "ld20"
            },
            {
                "source": "ld20",
                "target": "ld17"
            },
            {
                "source": "ld21",
                "target": "ld24"
            },
            {
                "source": "ld24",
                "target": "ld21"
            },
            {
                "source": "ld22",
                "target": "ld25"
            },
            {
                "source": "ld25",
                "target": "ld22"
            },
            {
                "source": "ld23",
                "target": "ld26"
            },
            {
                "source": "ld26",
                "target": "ld23"
            }
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_12= false;
        var is_connected_2_13 = false;
        var is_connected_3_14 = false;
        var is_connected_4_18 = false;
        var is_connected_5_19 = false;
        var is_connected_6_18= false;
        var is_connected_7_8 = false;
        var is_connected_9_15 = false;
        var is_connected_10_18 = false;
        var is_connected_11_17 = false;
        var is_connected_16_19 = false;
        var is_connected_17_20= false;
        var is_connected_21_24 = false;
        var is_connected_22_25 = false;
        var is_connected_23_26 = false;
        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_12){
                is_connected_1_12 = correct_connections_1_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_2_13){
                is_connected_2_13 = correct_connections_2_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_3_14){
                is_connected_3_14 = correct_connections_3_14.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_18){
                is_connected_4_18 = correct_connections_4_18.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_5_19){
                is_connected_5_19= correct_connections_5_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_6_18){
                is_connected_6_18 = correct_connections_6_18.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_7_8){
                is_connected_7_8= correct_connections_7_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_9_15){
                is_connected_9_15= correct_connections_9_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_10_18){
                is_connected_10_18 = correct_connections_10_18.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_11_17){
                is_connected_11_17= correct_connections_11_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_16_19){
                is_connected_16_19 = correct_connections_16_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_17_20){
                is_connected_17_20 = correct_connections_17_20.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_21_24){
                is_connected_21_24 = correct_connections_21_24.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_22_25){
                is_connected_22_25 = correct_connections_22_25.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_23_26){
                is_connected_23_26 = correct_connections_23_26.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

//&& is_connected_2_13 && is_connected_3_14 && is_connected_4_18 && is_connected_5_19 && is_connected_6_18 && is_connected_7_8 && is_connected_9_15 && is_connected_10_18 && is_connected_11_17 && is_connected_16_19 &&is_connected_17_20 &&is_connected_21_24 &&is_connected_22_25 && is_connected_23_26 
        if ( is_connected_1_12 && !unallowed_connection_present) 
        {
            alert("Alert ! Correct connection proceed to take reading.");
            document.getElementById("check-button").disabled=true;
            rightconnection=true;
            disable_all();
            return;
        } 
        else 
        {
            alert("Alert ! Incorrect connection.");
            
            return;
        } 
    });
});

