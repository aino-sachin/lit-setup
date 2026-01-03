import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {

  @property({ type: String })
  name = "Lit";

  static styles = css`
    h2 {
      color: #1976d2;
      font-family: Arial, sans-serif;
    }
  `;

  render() {
    return html`
      <h2>Hello ${this.name}</h2>
    `;
  }
}
