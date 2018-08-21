import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

    class Dylan404 extends PolymerElement {
        static get template() {
        return html`
            <style include="shared-styles">
            :host {
                display: block;
                overflow-x: hidden;
                min-height: 100vh;
            }
            a {
                text-decoration: none;
                color: var(--material-dark-theme-disabled-text);
                transition: all 0.4s ease;
            }
            a:hover {
                color: var(--material-dark-theme-primary-text);
            }
            .anchor-button {
                display: block;
                padding: 16px;
                max-width: 128px;
                margin: 0 auto;
                margin-top: 16px;
                color: var(--material-dark-theme-disabled-text);
                text-align: center;
                border-radius: 2px;
            }
            .anchor-button:hover {
                color: var(--material-dark-theme-primary-text);
            }
            .blue-grey-card-800 {
                background-color: var(--paper-blue-grey-800);
            }
            svg {
                overflow-y: hidden;
                max-width: 100%;
                max-height: 360px;
                height: auto;
                margin: 0 auto;
                animation: scaleUp 12s ease infinite alternate;
            }
            @keyframes scaleUp {
                0% { transform: rotate(360deg); }
                100% {  transform: rotate(0); }
            }
            @-webkit-keyframes scaleUp {
                0% { transform: rotate(360deg); }
                100% {  transform: rotate(0); }
            }
            </style>

            <svg width="100%" height="100%" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
            <g transform="matrix(0.75,0,0,0.75,-1101.75,-119.25)">
                <g id="Element" transform="matrix(0.13278,0,0,0.116152,1265.32,71.5372)">
                    <rect x="1534" y="753" width="482" height="551" style="fill:none;"/>
                    <g transform="matrix(0.968594,6.56268e-17,-2.75345e-17,1.10725,674.492,-130.335)">
                        <g>
                            <g transform="matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-241.214,-331.418)">
                                <ellipse cx="1008.66" cy="1018.31" rx="10.146" ry="10.188" style="fill:rgb(72,96,105);"/>
                            </g>
                            <g transform="matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-227.342,-337.427)">
                                <ellipse cx="1008.66" cy="1018.31" rx="10.146" ry="10.188" style="fill:rgb(106,139,152);"/>
                            </g>
                            <g transform="matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-241.214,-347.764)">
                                <ellipse cx="1008.66" cy="1018.31" rx="10.146" ry="10.188" style="fill:rgb(93,124,135);"/>
                            </g>
                            <g transform="matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-258.599,-337.427)">
                                <ellipse cx="1008.66" cy="1018.31" rx="10.146" ry="10.188" style="fill:rgb(106,139,152);"/>
                            </g>
                            <g transform="matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-258.599,-359.331)">
                                <ellipse cx="1008.66" cy="1018.31" rx="10.146" ry="10.188" style="fill:rgb(72,96,105);"/>
                            </g>
                            <g transform="matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-241.214,-365.34)">
                                <ellipse cx="1008.66" cy="1018.31" rx="10.146" ry="10.188" style="fill:rgb(106,139,152);"/>
                            </g>
                            <g transform="matrix(1.36728,-4.62233e-31,-2.26043e-31,1.36988,-227.342,-357.238)">
                                <ellipse cx="1008.66" cy="1018.31" rx="10.146" ry="10.188" style="fill:rgb(72,96,105);"/>
                            </g>
                        </g>
                        <g transform="matrix(0.507628,0.879238,-0.939692,0.542532,1535.79,-548.698)">
                            <ellipse cx="1164" cy="1054.04" rx="53" ry="169.956" style="fill:none;stroke:rgb(38,50,55);stroke-width:17.95px;"/>
                        </g>
                        <g transform="matrix(2.02065,0,0,2.02449,-831.5,-1107.19)">
                            <ellipse cx="1008.66" cy="1018.31" rx="10.146" ry="10.188" style="fill:rgb(26,35,38);"/>
                        </g>
                        <g transform="matrix(0.507628,-0.879238,0.939692,0.542532,-445.165,1498.17)">
                            <ellipse cx="1164" cy="1054.04" rx="53" ry="169.956" style="fill:none;stroke:rgb(38,50,55);stroke-width:17.95px;"/>
                        </g>
                        <g transform="matrix(2.02065,0,0,2.02449,-976.274,-994.353)">
                            <ellipse cx="1008.66" cy="1018.31" rx="10.146" ry="10.188" style="fill:rgb(26,35,38);"/>
                        </g>
                        <g transform="matrix(1.01526,-1.66533e-16,1.16573e-15,1.08506,-45.5671,-97.1175)">
                            <ellipse cx="1164" cy="1054.04" rx="53" ry="169.956" style="fill:none;stroke:rgb(38,50,55);stroke-width:17.95px;"/>
                        </g>
                        <g transform="matrix(2.02065,0,0,2.02449,-854.56,-919.222)">
                            <ellipse cx="1008.66" cy="1018.31" rx="10.146" ry="10.188" style="fill:rgb(26,35,38);"/>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

        <div>
            <h1 class="md-type--display1 md-type--text-center md-type--app-primary-text">This element has not yet been discovered.</h1>
            <p class="md-type--subhead md-type--text-center">
                <a href\$="[[rootPath]]" class="anchor-button md-type--button blue-grey-card-800">Go Home</a>
            </p>
        </div>
        `;
        }
    }

window.customElements.define('dylan-404', Dylan404);
