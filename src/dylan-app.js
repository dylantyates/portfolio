import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-styles/typography.js';
import './dylan-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(DylanAppGlobals.rootPath);

class DylanApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;

          --app-primary-color: var(--paper-blue-grey-900);
          --app-secondary-color: var(--paper-green-a700);
          --app-primary-text: rgba(26,32,38,0.87);
          --app-secondary-text: rgba(26,32,38,0.73);
          --app-disabled-text: rgba(26,32,38,0.54);

          --material-light-theme-statusbar: var(--paper-grey-300);
          --material-light-theme-appbar: var(--paper-grey-100);
          --material-light-theme-background: var(--paper-grey-50);
          --material-light-theme-card: #fff;
          --material-light-theme-primary-text: rgba(0,0,0,0.87);
          --material-light-theme-secondary-text: rgba(0,0,0,0.54);
          --material-light-theme-disabled-text: rgba(0,0,0,0.38);
          --material-light-theme-dividers: rgba(0,0,0,0.12);
          --material-light-theme-active-icon: rgba(0,0,0,0.54);
          --material-light-theme-inactive-icon: rgba(0,0,0,0.38);

          --material-dark-theme-statusbar: #000;
          --material-dark-theme-appbar: var(--paper-grey-900);
          --material-dark-theme-background: #303030;
          --material-dark-theme-card: var(--paper-grey-800);
          --material-dark-theme-primary-text: rgba(255,255,255,1);
          --material-dark-theme-secondary-text: rgba(255,255,255,0.7);
          --material-dark-theme-disabled-text: rgba(255,255,255,0.5);
          --material-dark-theme-dividers: rgba(255,255,255,0.12);
          --material-dark-theme-active-icon: rgba(255,255,255,1);
          --material-dark-theme-inactive-icon: rgba(255,255,255,0.5);
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        [main-title] {
          margin-left: 8px;
          text-transform: capitalize;
        }

        app-header {
          color: var(--material-dark-theme-primary-text);
          background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-logo {
          margin-top: -40px;
          margin-left: -8px;
          display: inline-block;
          vertical-align: middle;
        }

        .drawer-header {
          display: inline-block;
          @apply --paper-font-title;
          color: var(--app-primary-text);
          font-weight: bolder;
          margin: 0;
          margin-left: 4px;
          vertical-align: sub;
        }

        .drawer-header span {
          @apply --paper-font-subhead;
          opacity: 0.7;
        }

        .return-home {
          outline: none;
          display: block;
          text-decoration: none;
          margin: 0;
          margin-top: 20px;
          margin-bottom: -20px;
          padding: 0;
        }

        .drawer-list a {
          display: block;
          padding: 0 20px;
          @apply --paper-font-caption;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          color: var(--app-disabled-text);
          line-height: 40px;
          transition: all 0.4s ease;
        }

        .drawer-list a span {
          vertical-align: sub;
        }

        .drawer-contact {
          @apply --paper-font-caption;
          vertical-align: text-bottom;
          padding: 0 16px;
        }

        .drawer-list a:hover {
          color: var(--app-primary-text);
        }

        .drawer-list p {
          display: block;
          padding: 0 20px;
          padding-top: 8px;
          @apply --paper-font-caption;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          color: var(--material-light-theme-inactive-icon);
        }

        .drawer-list a.iron-selected {
          color: var(--app-primary-text);
          font-weight: 700;
        }
        app-toolbar a {
          text-decoration: none;
          color: var(--material-dark-theme-active-icon);
          margin-left: 4px;
          margin-right: 4px;
        }
        [main-title] {
          font-weight: 100;
        }
        iron-pages {
            padding-bottom: 64px;
            min-height: 100vh;
        }
        footer {
            position: absolute;
            color: var(--app-primary-text);
            opacity: 0.7;
            font-weight: 300;
            font-size: 14px;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            margin-top: 20px;
            line-height: 24px;
        }
      </style>

      <app-location url-space-regex="[[rootPath]]" route="{{_route}}"></app-location>
      <app-route
          route="{{_route}}"
          pattern="/:page"
          data="{{_routeData}}"
          tail="{{_subRoute}}"></app-route>

      <app-drawer-layout fullbleed narrow="{{narrow}}" responsive-width="1920px">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>
            <a name="home" href\$="[[rootPath]]" class="return-home">
              <img src="[[rootPath]]images/atom.svg" class="drawer-logo" height="56" width="56">
              <span class="drawer-header">Dylan Yates <br> <span>Portfolio</span></span>
            </a>
          </app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <p>Elements</p>
            <a name="all" href\$="[[rootPath]]all">
              <paper-icon-button icon="dylan-icons:all_icon"></paper-icon-button>
              <span>All</span>
            </a>
            <a name="designer" href\$="[[rootPath]]designer">
              <paper-icon-button icon="dylan-icons:designer_icon"></paper-icon-button>
              <span>Designer</span>
            </a>
            <a name="developer" href\$="[[rootPath]]developer">
              <paper-icon-button icon="dylan-icons:developer_icon"></paper-icon-button>
              <span>Developer</span>
            </a>
            <a name="personal" href\$="[[rootPath]]personal">
              <paper-icon-button icon="dylan-icons:personal_icon"></paper-icon-button>
              <span>Personal</span>
            </a>
            <a name="social" href\$="[[rootPath]]social">
              <paper-icon-button icon="dylan-icons:social_icon"></paper-icon-button>
              <span>Social</span>
            </a>
            <p>Graphic Design</p>
            <a name="graphics" href\$="[[rootPath]]graphics">
              <paper-icon-button icon="dylan-icons:graphics_icon"></paper-icon-button>
              <span>All</span>
            </a>
            <p>Contact</p>
            <a name="contact" href\$="[[rootPath]]contact" class="drawer-contact">
              <paper-icon-button icon="dylan-icons:email"></paper-icon-button>
              <span>dyates.texas</span>
            </a>
            <a href="https://www.github.com/dylantyates/" class="drawer-contact">
              <paper-icon-button icon="dylan-icons:github"></paper-icon-button>
              <span>dylantyates</span>
            </a>
            <a href="https://www.instagram.com/dwreckfoo/" class="drawer-contact">
              <paper-icon-button icon="dylan-icons:instagram"></paper-icon-button>
              <span>dylantyates</span>
            </a>
            <a href="https://www.linkedin.com/in/dylanyates/" class="drawer-contact">
              <paper-icon-button icon="dylan-icons:linkedin"></paper-icon-button>
              <span>dylanyates</span>
            </a>
          </iron-selector>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout>

          <app-header slot="header" reveals effects="waterfall">
          <app-toolbar>
              <paper-icon-button icon="dylan-icons:menu" drawer-toggle></paper-icon-button>
              <div main-title>[[page]]</div>
              <div>
                <img src="[[rootPath]]images/dylan_icon.png" height="48" width="48">
              </div>
            </app-toolbar>
          </app-header>

          <iron-pages
              selected="[[page]]"
              attr-for-selected="name"
              fallback-selection="404"
              role="main">
            <dylan-home name="home"></dylan-home>
            <dylan-all name="all"></dylan-all>
            <dylan-graphics name="graphics"></dylan-graphics>
            <dylan-personal name="personal"></dylan-personal>
            <dylan-developer name="developer"></dylan-developer>
            <dylan-designer name="designer"></dylan-designer>
            <dylan-social name="social"></dylan-social>
            <dylan-contact name="contact"></dylan-contact>
            <dylan-404 name="404"></dylan-404>
          </iron-pages>
          <footer>
            Dylan Yates &copy; 2018 - All Rights Reserved
          </footer>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }

  static get properties() {
    return {
        _route: Object,
        page: {
            type: String,
            reflectToAttribute: true,
            observer: '_pageChanged',
        },
        _routeData: Object,
        _subRoute: Object,
        rootPath: String
    };
  }

  static get observers() {
    return [
      '_routePageChanged(_routeData.page)'
    ];
  }

  _routePageChanged(page) {
    if (!page) {
      this.page = 'home';
    } else if (['home', 'all', 'graphics', 'personal', 'developer', 'designer', 'social', 'contact'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = '404';
    }

    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    switch (page) {
      case 'home':
        import('./dylan-home.js');
        break;
      case 'all':
        import('./dylan-all.js');
        break;
      case 'graphics':
        import('./dylan-graphics.js');
        break;
      case 'personal':
        import('./dylan-personal.js');
        break;
      case 'developer':
        import('./dylan-developer.js');
        break;
      case 'designer':
        import('./dylan-designer.js');
        break;
      case 'social':
        import('./dylan-social.js');
        break;
      case 'contact':
        import('./dylan-contact.js');
        break;
      case '404':
        import('./dylan-404.js');
        break;
    }
  }

}
const _customElementsDefine = window.customElements.define;
window.customElements.define = function(name, clazz, config) {
  if (!customElements.get(name)) {
    _customElementsDefine.call(window.customElements, name, clazz, config);
  }
};
window.customElements.define('dylan-app', DylanApp);
