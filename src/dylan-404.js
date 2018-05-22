define(["./dylan-app.js"],function(_dylanApp){"use strict";var _templateObject_3c5579605df711e8a185ffce48f2dd6e=babelHelpers.taggedTemplateLiteral(["\n            <style include=\"shared-styles\">\n            :host {\n                display: block;\n                overflow-x: hidden;\n                min-height: 100vh;\n            }\n            a {\n                text-decoration: none;\n                color: var(--material-dark-theme-disabled-text);\n                transition: all 0.4s ease;\n            }\n            a:hover {\n                color: var(--material-dark-theme-primary-text);\n            }\n            .anchor-button {\n                display: block;\n                padding: 16px;\n                max-width: 128px;\n                margin: 0 auto;\n                margin-top: 16px;\n                color: var(--material-dark-theme-disabled-text);\n                text-align: center;\n                border-radius: 2px;\n            }\n            .anchor-button:hover {\n                color: var(--material-dark-theme-primary-text);\n            }\n            .blue-grey-card-800 {\n                background-color: var(--paper-blue-grey-800);\n            }\n            svg {\n                overflow-y: hidden;\n                max-width: 100%;\n                max-height: 360px;\n                height: auto;\n                margin: 0 auto;\n                animation: scaleUp 12s ease infinite alternate;\n            }\n            @keyframes scaleUp {\n                0% { transform: rotate(360deg); }\n                100% {  transform: rotate(0); }\n            }\n            @-webkit-keyframes scaleUp {\n                0% { transform: rotate(360deg); }\n                100% {  transform: rotate(0); }\n            }\n            </style>\n\n            <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 48 48\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;\">\n            <g transform=\"matrix(0.75,0,0,0.75,-1101.75,-119.25)\">\n                <g id=\"Element\" transform=\"matrix(0.13278,0,0,0.116152,1265.32,71.5372)\">\n                    <rect x=\"1534\" y=\"753\" width=\"482\" height=\"551\" style=\"fill:none;\"/>\n                    <g transform=\"matrix(0.968594,6.56268e-17,-2.75345e-17,1.10725,674.492,-130.335)\">\n                        <g>\n                            <g transform=\"matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-241.214,-331.418)\">\n                                <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(72,96,105);\"/>\n                            </g>\n                            <g transform=\"matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-227.342,-337.427)\">\n                                <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(106,139,152);\"/>\n                            </g>\n                            <g transform=\"matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-241.214,-347.764)\">\n                                <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(93,124,135);\"/>\n                            </g>\n                            <g transform=\"matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-258.599,-337.427)\">\n                                <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(106,139,152);\"/>\n                            </g>\n                            <g transform=\"matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-258.599,-359.331)\">\n                                <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(72,96,105);\"/>\n                            </g>\n                            <g transform=\"matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-241.214,-365.34)\">\n                                <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(106,139,152);\"/>\n                            </g>\n                            <g transform=\"matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-227.342,-357.238)\">\n                                <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(72,96,105);\"/>\n                            </g>\n                        </g>\n                        <g transform=\"matrix(0.507628,0.879238,-0.939692,0.542532,1535.79,-548.698)\">\n                            <ellipse cx=\"1164\" cy=\"1054.04\" rx=\"53\" ry=\"169.956\" style=\"fill:none;stroke:rgb(38,50,55);stroke-width:17.95px;\"/>\n                        </g>\n                        <g transform=\"matrix(2.02065,0,0,2.02449,-831.5,-1107.19)\">\n                            <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(26,35,38);\"/>\n                        </g>\n                        <g transform=\"matrix(0.507628,-0.879238,0.939692,0.542532,-445.165,1498.17)\">\n                            <ellipse cx=\"1164\" cy=\"1054.04\" rx=\"53\" ry=\"169.956\" style=\"fill:none;stroke:rgb(38,50,55);stroke-width:17.95px;\"/>\n                        </g>\n                        <g transform=\"matrix(2.02065,0,0,2.02449,-976.274,-994.353)\">\n                            <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(26,35,38);\"/>\n                        </g>\n                        <g transform=\"matrix(1.01526,-1.66533e-16,1.16573e-15,1.08506,-45.5671,-97.1175)\">\n                            <ellipse cx=\"1164\" cy=\"1054.04\" rx=\"53\" ry=\"169.956\" style=\"fill:none;stroke:rgb(38,50,55);stroke-width:17.95px;\"/>\n                        </g>\n                        <g transform=\"matrix(2.02065,0,0,2.02449,-854.56,-919.222)\">\n                            <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(26,35,38);\"/>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </svg>\n\n        <div>\n            <h1 class=\"md-type--display1 md-type--text-center md-type--app-primary-text\">This element has not yet been discovered.</h1>\n            <p class=\"md-type--subhead md-type--text-center\">\n                <a href$=\"[[rootPath]]\" class=\"anchor-button md-type--button blue-grey-card-800\">Go Home</a>\n            </p>\n        </div>\n        "],["\n            <style include=\"shared-styles\">\n            :host {\n                display: block;\n                overflow-x: hidden;\n                min-height: 100vh;\n            }\n            a {\n                text-decoration: none;\n                color: var(--material-dark-theme-disabled-text);\n                transition: all 0.4s ease;\n            }\n            a:hover {\n                color: var(--material-dark-theme-primary-text);\n            }\n            .anchor-button {\n                display: block;\n                padding: 16px;\n                max-width: 128px;\n                margin: 0 auto;\n                margin-top: 16px;\n                color: var(--material-dark-theme-disabled-text);\n                text-align: center;\n                border-radius: 2px;\n            }\n            .anchor-button:hover {\n                color: var(--material-dark-theme-primary-text);\n            }\n            .blue-grey-card-800 {\n                background-color: var(--paper-blue-grey-800);\n            }\n            svg {\n                overflow-y: hidden;\n                max-width: 100%;\n                max-height: 360px;\n                height: auto;\n                margin: 0 auto;\n                animation: scaleUp 12s ease infinite alternate;\n            }\n            @keyframes scaleUp {\n                0% { transform: rotate(360deg); }\n                100% {  transform: rotate(0); }\n            }\n            @-webkit-keyframes scaleUp {\n                0% { transform: rotate(360deg); }\n                100% {  transform: rotate(0); }\n            }\n            </style>\n\n            <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 48 48\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;\">\n            <g transform=\"matrix(0.75,0,0,0.75,-1101.75,-119.25)\">\n                <g id=\"Element\" transform=\"matrix(0.13278,0,0,0.116152,1265.32,71.5372)\">\n                    <rect x=\"1534\" y=\"753\" width=\"482\" height=\"551\" style=\"fill:none;\"/>\n                    <g transform=\"matrix(0.968594,6.56268e-17,-2.75345e-17,1.10725,674.492,-130.335)\">\n                        <g>\n                            <g transform=\"matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-241.214,-331.418)\">\n                                <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(72,96,105);\"/>\n                            </g>\n                            <g transform=\"matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-227.342,-337.427)\">\n                                <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(106,139,152);\"/>\n                            </g>\n                            <g transform=\"matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-241.214,-347.764)\">\n                                <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(93,124,135);\"/>\n                            </g>\n                            <g transform=\"matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-258.599,-337.427)\">\n                                <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(106,139,152);\"/>\n                            </g>\n                            <g transform=\"matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-258.599,-359.331)\">\n                                <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(72,96,105);\"/>\n                            </g>\n                            <g transform=\"matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-241.214,-365.34)\">\n                                <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(106,139,152);\"/>\n                            </g>\n                            <g transform=\"matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-227.342,-357.238)\">\n                                <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(72,96,105);\"/>\n                            </g>\n                        </g>\n                        <g transform=\"matrix(0.507628,0.879238,-0.939692,0.542532,1535.79,-548.698)\">\n                            <ellipse cx=\"1164\" cy=\"1054.04\" rx=\"53\" ry=\"169.956\" style=\"fill:none;stroke:rgb(38,50,55);stroke-width:17.95px;\"/>\n                        </g>\n                        <g transform=\"matrix(2.02065,0,0,2.02449,-831.5,-1107.19)\">\n                            <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(26,35,38);\"/>\n                        </g>\n                        <g transform=\"matrix(0.507628,-0.879238,0.939692,0.542532,-445.165,1498.17)\">\n                            <ellipse cx=\"1164\" cy=\"1054.04\" rx=\"53\" ry=\"169.956\" style=\"fill:none;stroke:rgb(38,50,55);stroke-width:17.95px;\"/>\n                        </g>\n                        <g transform=\"matrix(2.02065,0,0,2.02449,-976.274,-994.353)\">\n                            <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(26,35,38);\"/>\n                        </g>\n                        <g transform=\"matrix(1.01526,-1.66533e-16,1.16573e-15,1.08506,-45.5671,-97.1175)\">\n                            <ellipse cx=\"1164\" cy=\"1054.04\" rx=\"53\" ry=\"169.956\" style=\"fill:none;stroke:rgb(38,50,55);stroke-width:17.95px;\"/>\n                        </g>\n                        <g transform=\"matrix(2.02065,0,0,2.02449,-854.56,-919.222)\">\n                            <ellipse cx=\"1008.66\" cy=\"1018.31\" rx=\"10.146\" ry=\"10.188\" style=\"fill:rgb(26,35,38);\"/>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </svg>\n\n        <div>\n            <h1 class=\"md-type--display1 md-type--text-center md-type--app-primary-text\">This element has not yet been discovered.</h1>\n            <p class=\"md-type--subhead md-type--text-center\">\n                <a href\\$=\"[[rootPath]]\" class=\"anchor-button md-type--button blue-grey-card-800\">Go Home</a>\n            </p>\n        </div>\n        "]),Dylan404=function(_PolymerElement){babelHelpers.inherits(Dylan404,_PolymerElement);function Dylan404(){babelHelpers.classCallCheck(this,Dylan404);return babelHelpers.possibleConstructorReturn(this,(Dylan404.__proto__||Object.getPrototypeOf(Dylan404)).apply(this,arguments))}babelHelpers.createClass(Dylan404,null,[{key:"template",get:function get(){return(0,_dylanApp.html)(_templateObject_3c5579605df711e8a185ffce48f2dd6e)}}]);return Dylan404}(_dylanApp.PolymerElement);window.customElements.define("dylan-404",Dylan404)});