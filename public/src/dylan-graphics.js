import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-list/iron-list.js';
import './graphics-card.js';

class DylanGraphics extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    display: block;
                }
            </style>

            <iron-ajax
                auto
                handle-as="json"
                url="[[rootPath]]data/graphics.json"
                last-response="{{graphics}}"></iron-ajax>

            <iron-list items="[[graphics]]" as="item" grid>
                <template>
                    <div>
                        <graphics-card
                            graphics-category="[[item.graphics_category]]"
                            graphics-color="[[item.graphics_color]]"
                            graphics-image="[[item.graphics_image]]"
                            graphics-name="[[item.graphics_name]]"
                            graphics-lead="[[item.graphics_lead]]"></graphics-card>
                    </div>
                </template>
            </iron-list>
        `;
    }

    static get properties() {
        return {
            graphics: Object,
            rootPath: String
        }
    }
}

window.customElements.define('dylan-graphics', DylanGraphics);