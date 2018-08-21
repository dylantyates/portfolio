import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element.js";
import "../node_modules/@polymer/iron-ajax/iron-ajax.js";
import "../node_modules/@polymer/iron-list/iron-list.js";
import './element-card.js';

class DylanAll extends PolymerElement {
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
                url="[[rootPath]]data/elements.json"
                last-response="{{elements}}"></iron-ajax>

        <iron-list items="[[elements]]" as="item" grid>
            <template>
                <div>
                <element-card
                    class="element-card"
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
      elements: Object,
      rootPath: String
    };
  }

}

window.customElements.define('dylan-all', DylanAll);