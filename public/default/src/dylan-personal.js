import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element.js";
import "../node_modules/@polymer/iron-ajax/iron-ajax.js";
import "../node_modules/@polymer/iron-list/iron-list.js";
import './element-card.js';

class DylanPersonal extends PolymerElement {
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
                url="[[rootPath]]data/elements_personal.json"
                last-response="{{elementsPersonal}}"></iron-ajax>

            <iron-list items="[[elementsPersonal]]" as="item" grid>
                <template>
                    <div>
                        <element-card
                        element-category="[[item.element_category]]"
                        element-name="[[item.element_name]]"
                        element-symbol="[[item.element_symbol]]"
                        element-color="[[item.element_color]]"
                        element-link="[[item.element_link]]"
                        element-lead="[[item.element_lead]]"></element-card>
                    </div>
                </template>
            </iron-list>
        `;
  }

  static get properties() {
    return {
      elementsPersonal: Object,
      rootPath: String
    };
  }

}

window.customElements.define('dylan-personal', DylanPersonal);