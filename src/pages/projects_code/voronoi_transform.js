import React from 'react';
var vega = require('vega');

export default class VoronoiTransform extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    spec = {
        "$schema": "https://vega.github.io/schema/vega/v5.json",
        "description": "First try on Vega",
        "width": 500,
        "height": 500,
        "padding": 20,
        "autosize": "pad",
        "signals": [
          { "name": "xscale_value", "value": 12,
            "bind": {"input": "range", "min": 1, "max": 20, "step": 1} },
          { "name": "yscale_value", "value": 10,
            "bind": {"input": "range", "min": 1, "max": 20, "step": 1} },
          {
            "name": "xCrosshair",
            "on": [{"events": "mousemove", "update": "hover ? hover.datum.x : '0'"}]
          },
          {
            "name": "yCrosshair",
            "on": [{"events": "mousemove", "update": "hover ? hover.datum.y : '0'"}]
          },
          {
            "name": "xValueOffset",
            "value": 0,
            "on": [{"events": "mousemove", "update": "x()<width/2 ? 5 : -5"}]
          },
          {
            "name": "xValueAlign",
            "value": "left",
            "on": [{"events": "mousemove", "update": "x()<width/2 ? 'left' : 'right'"}]
          },
          {
            "name": "yValueOffset",
            "value": 15,
            "on": [{"events": "mousemove", "update": "y()<height/2 ? 15 : -5"}]
          },
          {
            "name": "hover",
            "value": null,
            "on": [
              {"events": "@voronoiPaths:mouseover", "update": "datum"},
              {"events": "@voronoiPaths:mouseout", "update": "null"}
            ]
          },
          {
            "name": "addPoint",
            "on": [
              {
                "events": "click[!event.ctrlKey]",
                "update": "{x: invert('xscale', x()), y: invert('yscale', y())}"
              }
            ]
          },
          {
            "name": "remPoint",
            "on": [
              {
                "events": "path:click[event.ctrlKey]",
                "update": "datum.datum"
              }
            ]
          }
        ],
        "data": [
          {
            "name": "source",
            "values": [
              {"x": 12, "y": 8},
              {"x": 10, "y": 10},
              {"x": 6, "y": 3},
              {"x": 3, "y": 6},
              {"x": 3, "y": 8},
              {"x": 7, "y": 6},
              {"x": 10, "y": 2}
            ],
            "on": [
              {"trigger": "addPoint", "insert": "addPoint"},
              {"trigger": "remPoint", "remove": "remPoint"}
            ]
          }
        ],
        "scales": [
          {
            "name": "xscale",
            "type": "linear",
            "domain": [0, {"signal": "xscale_value"}],
            "range": "width"
          },
          {
            "name": "yscale",
            "type": "linear",
            "domain": [0, {"signal": "yscale_value"}],
            "range": "height"
          }
        ],
        "axes": [
          {"scale": "xscale", "orient": "bottom"},
          {"scale": "yscale", "orient": "left"}
        ],
        "marks": [
          {
            "type": "symbol",
            "name": "points",
            "from": {"data": "source"},
            "interactive": false,
            "encode": {
              "enter": {"fill": {"value": "steelblue"}, "opacity": {"value": 0.8}, "size": {"value": 200}},
              "update": {
                "x": {"scale": "xscale", "field": "x"},
                "y": {"scale": "yscale", "field": "y"}
              },
              "exit": {},
              "hover": {}
            }
          },
          {
            "type": "rule",
            "name": "verticalCrosshairLine",
            "encode": {
              "enter": {
                "stroke": {"value": "red"}
              },
              "update": {
                "x": {"signal": "xCrosshair", "scale": "xscale"},
                "x2": {"signal": "xCrosshair", "scale": "xscale"},
                "y": {"value": 0},
                "y2": {"signal": "height"}
              }
            }
          },
          {
            "type": "rule",
            "name": "horizontalCrosshairLine",
            "encode": {
              "enter": {
                "stroke": {"value": "red"}
              },
              "update": {
                "x": {"value": 0},
                "x2": {"signal": "width"},
                "y": {"signal": "yCrosshair", "scale": "yscale"},
                "y2": {"signal": "yCrosshair", "scale": "yscale"}
              }
            }
          },
          {
            "type": "text",
            "name": "xValue",
            "encode": {
              "update": {
                "x": {"signal": "xCrosshair", "scale": "xscale"},
                "y": {"signal": "height"},
                "text": {"signal": "xCrosshair"},
                "dx": {"signal": "xValueOffset"},
                "dy": {"value": -5},
                "align": {"signal": "xValueAlign"}
              }
            }
          },
          {
            "type": "text",
            "name": "yValue",
            "encode": {
              "update": {
                "x": {"value": 0},
                "y": {"signal": "yCrosshair", "scale": "yscale"},
                "text": {"signal": "yCrosshair"},
                "dx": {"value": 5},
                "dy": {"signal": "yValueOffset"},
                "align": {"value": "left"}
              }
            }
          },
          {
            "type": "path",
            "name": "voronoiPaths",
            "from": {"data": "points"},
            "encode": {
              "enter": {
                "stroke": {"value": "blue"},
                "fillOpacity": {"value": 0.25},
                "strokeOpacity": {"value": 0.25}
              },
              "update": {"fill": {"value": "transparent"}},
              "hover": {"fill": {"value": "red"}}
            },
            "transform": [
              {
                "type": "voronoi",
                "x": "datum.x",
                "y": "datum.y",
                "size": [{"signal": "width"}, {"signal": "height"}]
              }
            ]
          }
        ]
      };

    //create the view instance for the spec and attach it to the given DOM node
    componentDidMount() {
        let parsed_spec = vega.parse(this.spec);
        let view = new vega.View(parsed_spec).initialize('#vega_div').hover();
        view.run();
    }

    render() {
        return(
            <main style={{ 'marginLeft': '15%' }}>
                <div>
                    <h1>Vega.js voronoi transform in a diagram</h1>
                    <h3>Click/Control-Click to add/remove points!</h3>
                </div>
                <div ref={this.myRef} id='vega_div'>
                    
                </div>
                <div>
                    <br />Created by <a href='http://github.com/nick-nsc/' target='_blank' rel='noreferrer'>nick-nsc</a>.
                </div>
            </main>
        )
    }
}
