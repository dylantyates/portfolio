import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import './shared-styles.js';

class GraphicsCard extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                    display: block;
                    padding: 16px;
                }
                @media (max-width: 359px) {
                    :host {
                        padding: 16px 0;
                    }
                }
                .container {
                    max-width: 768px;
                    margin: 0 auto;
                }
                .push-left {
                    padding-left: 12px;
                }
                paper-card {
                    width: 320px;
                    max-width: 100%;
                    min-height: 512px;
                    padding: 16px;
                    padding-bottom: 32px;
                }
                paper-card * {
                    padding: 8px;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                    transition: all 0.4s ease;
                }
                .md-type--app-icon-inactive:hover {
                    color: var(--app-primary-color);
                }
                .responsive-image {
                    max-width: 100%;
                    height: 320px;
                    width: 320px;
                    box-sizing: border-box;
                }
            </style>

            <paper-card class="md-type--text-left">
                <iron-image
                    alt="[[graphicsName]]"
                    class="responsive-image"
                    sizing="cover"
                    style="background-color:[[graphicsColor]];"
                    src="[[rootPath]][[graphicsImage]]"
                    fade
                    preload></iron-image>
                <h4 class="md-type--subhead md-type--app-secondary-text md-type--flatten-margin-all">{{graphicsCategory}}</h4>
                <p class="md-type--headline md-type--app-primary md-type--flatten-margin-all">
                {{graphicsName}}
                </p>
                <p class="md-type--subhead md-type--app-primary-text md-type--flatten-margin-all">
                {{graphicsLead}}
                </p>
            </paper-card>
    `;
    }

    static get properties() {
        return {
            elements: Object,
            rootPath: String,
            graphicsCategory: String,
            graphicsName: String,
            graphicsColor: String,
            graphicsImage: String,
            graphicsLead: String
        }
    }
}
window.customElements.define('graphics-card', GraphicsCard);