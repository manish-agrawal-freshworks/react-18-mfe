import { mountReactApp } from './main.jsx';

class newMFE extends HTMLElement {
  connectedCallback() {
    const mountable = document.createElement('div');
    mountable.id = 'mfe-root';
    this.attachShadow({ mode: 'open' }).appendChild(mountable);

    this.shadowRoot.appendChild(mountable);
    mountReactApp({ element: mountable, options: this.options });
  }
}

customElements.define('new-react-18-mfe', newMFE);
