import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element.js";
import "../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js";
import "../node_modules/@polymer/iron-selector/iron-selector.js";
import "../node_modules/@polymer/paper-card/paper-card.js";
import "../node_modules/@polymer/iron-image/iron-image.js";
import './dylan-icons.js';
import './dylan-home.js';
import './home-card.js';
import './shared-styles.js';

class DylanHome extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
      :host {
        display: block;
      }
      iron-image {
        margin-left: 48px;
        margin-top: 24px;
      }
      .secondary-bg {
        background-color: var(--app-primary-color);
        color: #fff;
      }
      .secondary-bg p {
        color: rgba(255,255,255,0.54);
        max-width: 512px;
      }
      section {
        min-height: 100vh;
        padding: 16px;
      }
      .container {
        max-width: 992px;
        margin: 2em auto;
      }
      .center-align {
        margin: 25vh auto;
      }
      .col {
        padding: 16px;
      }
      a {
        text-decoration: none;
        color: var(--material-dark-theme-disabled-text);
        transition: all 0.4s ease;
      }
      a:hover {
        color: var(--material-dark-theme-primary-text);
      }
      iron-selector paper-card {
        display: block;
        margin: 1em auto;
        max-width: 512px;
        padding: 24px;
      }
      .chevron {
        margin-top: -34px;
        clear: none;
        float: right;
      }
      .responsive-image {
        width: 540px;
        height: 440px;
        max-width: 100%;
      }
      .blue-grey-card-800 {
        background-color: var(--paper-blue-grey-800);
      }
      .blue-grey-card-700 {
        background-color: var(--paper-blue-grey-700);
      }
      .blue-grey-card-600{
        background-color: var(--paper-blue-grey-600);
      }
      .blue-grey-card-500 {
        background-color: var(--paper-blue-grey-500);
      }
      .blue-grey-card-400 {
        background-color: var(--paper-blue-grey-400);
      }
      .main-logo {
        max-width: 100%;
      }
      .anchor-button {
        display: block;
        padding: 16px;
        max-width: 128px;
        margin-left: auto;
        margin-right: 0;
        margin-top: 16px;
        color: var(--material-dark-theme-disabled-text);
        text-align: center;
        border-radius: 2px;
      }
      .anchor-button:hover {
          color: var(--material-dark-theme-primary-text);
      }
      @media (max-width: 992px) {
        .container {
          @apply --layout-vertical;
          margin: 0 auto;
        }
        .secondary-bg {
          text-align: center;
        }
        .secondary-bg h2 {
          max-width: 512px;
          margin: 1.2em auto;
          text-align: left;
        }
        .secondary-bg p {
          margin: 0 auto;
        }
        iron-image {
          margin-left: 0;
        }
        .anchor-button {
          margin: 0 auto;
          margin-top: 32px;
        }
      }
    </style>

    <section>

    <div class="container">

      <div class="col col-6">
        <home-card
          element-name="Dylan Yates"
          element-symbol="Dy"
          element-color="#CFD8DC"
          element-lead="Welcome to my portfolio. I am a frontend web developer / graphic designer who currently resides in Houston, TX. Javascript is the future! Click any of the links below to get in touch with me."></home-card>
      </div>

      <div class="col col-6">
        <iron-selector selected="[[page]]" attr-for-selected="name" role="navigation">
          <a href\$="[[rootPath]]all" name="all">
            <paper-card class="blue-grey-card-800">
              <h2 class="md-type--title md-type--flatten-margin-all">All Elements</h2>
              <paper-icon-button class="chevron" icon="dylan-icons:chevron_right"></paper-icon-button>
            </paper-card>
          </a>
          <a href\$="[[rootPath]]designer" name="designer">
            <paper-card class="blue-grey-card-700">
              <h2 class="md-type--title md-type--flatten-margin-all">Designer Elements</h2>
              <paper-icon-button class="chevron" icon="dylan-icons:chevron_right"></paper-icon-button>
            </paper-card>
          </a>
          <a href\$="[[rootPath]]developer" name="developer">
            <paper-card class="blue-grey-card-600">
              <h2 class="md-type--title md-type--flatten-margin-all">Developer Elements</h2>
              <paper-icon-button class="chevron" icon="dylan-icons:chevron_right"></paper-icon-button>
            </paper-card>
          </a>
          <a href\$="[[rootPath]]personal" name="personal">
            <paper-card class="blue-grey-card-500">
              <h2 class="md-type--title md-type--flatten-margin-all">Personal Elements</h2>
              <paper-icon-button class="chevron" icon="dylan-icons:chevron_right"></paper-icon-button>
            </paper-card>
          </a>
          <a href\$="[[rootPath]]social" name="social">
            <paper-card class="blue-grey-card-400">
              <h2 class="md-type--title md-type--flatten-margin-all">Social Elements</h2>
              <paper-icon-button class="chevron" icon="dylan-icons:chevron_right"></paper-icon-button>
            </paper-card>
          </a>
        </iron-selector>
      </div>
    </div>

    </section>

    <section class="secondary-bg">
      <div class="container center-align">
        <div class="col col-6">
          <h2 class="md-type--display2">Graphic Design</h2>
          <p class="md-type--subhead md-type--text-justify">I will consistently update my graphic design portfolio with new artwork in my spare time. If you or your business need help with your logo, branding, graphics, or any other digital deliverable I'd be happy to help.
          <br><br>
          Feel free to check out @dylantyates on Instagram. The best way to contact me regarding graphic design is via email or a direct message on Instagram.</p>
          <p class="md-type--subhead">
            <a href\$="[[rootPath]]graphics" name="graphics" class="anchor-button md-type--button blue-grey-card-600">All Graphics</a>
          </p>

        </div>
        <div class="col col-6">
          <iron-image
            class="responsive-image"
            sizing="cover"
            style="background-color:slategray;"
            src="[[rootPath]]images/graphics.jpg"
            fade
            preload>
          </iron-image>
        </div>
      </div>
    </section>
    `;
  }

  static get properties() {
    return {
      elements: Object,
      page: String,
      rootPath: String
    };
  }

}

window.customElements.define('dylan-home', DylanHome);