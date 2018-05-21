import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

    class Dylan404 extends PolymerElement {
        static get template() {
        return html`
            <style>
            :host {
            display: block;
            }
            </style>

            Oops you hit a 404. <a href\$="[[rootPath]]">Head back to home.</a>
        `;
        }
    }

window.customElements.define('dylan-404', Dylan404);
