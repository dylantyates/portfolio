import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element.js";
import "../node_modules/@polymer/paper-card/paper-card.js";
import "../node_modules/@polymer/iron-icon/iron-icon.js";
import "../node_modules/@polymer/paper-input/paper-input.js";
import "../node_modules/@polymer/iron-image/iron-image.js";
import './shared-styles.js';
import './dylan-icons.js';

class DylanContact extends PolymerElement {
  static get template() {
    return html`
        <style include="shared-styles">
            :host {
                display: block;
                padding: 16px;
                --paper-input-container-input-color: var(--app-secondary-text);
                --paper-input-container-focus-color: var(--app-primary-text);
            }
            paper-card {
                display: block;
                max-width: 512px;
                margin: 1em auto;
                padding: 24px;
            }
            button[disabled] {
                cursor: auto;
                pointer-events: none;
                opacity: 0.54;
            }
            button {
                display: block;
                width: 100%;
                max-width: 512px;
                margin: 1em auto;
                background-color: var(--app-primary-color);
                text-align: center;
                color: #fff;
                border-radius: 2px;
                -webkit-border-radius: 2px;
                -moz-border-radius: 2px;
                padding: 16px 0;
                cursor: pointer;
            }
            a {
                text-decoration: none;
                color: inherit;
                font-weight: 500;
            }
            a:hover {
                text-decoration: underline;
            }
            iron-icon {
                height: 16px;
                width: 16px;
                margin-top: -2px;
            }
            </style>

            <form action="https://formspree.io/dyates.texas@gmail.com" method="POST">
            <paper-card>
                <h2 class="md-type--display1 md-type--app-primary-text md-type--bold">Get In Touch</h2>
                <p class="md-type--subhead md-type--text-justify md-type--app-primary-text">Are you in need of <a name="graphics" href\$="[[rootPath]]#/graphics" title="Graphic Design Elements">graphic design</a>, <a name="graphics" href="[[rootPath]]#/designer" title="Web Design Elements">web design</a>, <a name="graphics" href="[[rootPath]]#/developer" title="Web Developer Elements">front end web development</a>, or <a name="graphics" href="[[rootPath]]#/all" title="All Elements">website consulting</a>? If so, fill out the form below to send me your contact information. If not, feel free to still get in touch with me.</p>
                <paper-input id="nameInput" type="text" name="name" label="Full Name" value="{{fullName}}" max-length="33"></paper-input>
                <paper-input id="emailInput" type="email" name="_replyTo" label="Email Address" value="{{emailAddress}}" max-length="55"></paper-input>
            </paper-card>
            <button class="md-type--button" type="submit" title="Send Email" disabled\$="{{formValid}}">SEND <iron-icon icon="dylan-icons:open_in_new"></iron-icon></button>
            </form>
      `;
  }

  static get properties() {
    return {
      rootPath: String,
      fullName: {
        type: String,
        notify: true,
        value: ''
      },
      emailAddress: {
        notify: true,
        value: ''
      },
      formValid: {
        computed: '_validateInputs(fullName, emailAddress)'
      }
    };
  }

  _validateInputs(from, reply) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var result = re.test(String(reply).toLowerCase());
    console.log(result);

    if (result) {
      return false;
    } else {
      return true;
    }
  }

}

window.customElements.define('dylan-contact', DylanContact);