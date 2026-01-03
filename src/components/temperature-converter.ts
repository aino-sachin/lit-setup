import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("temperature-converter")
export class TemperatureConverter extends LitElement {

  @state() value = 0;
  @state() from = "c";
  @state() to = "f";
  @state() result = 0;

  static styles = css`
    .box {
      border: 1px solid #ccc;
      padding: 16px;
      border-radius: 8px;
      max-width: 300px;
    }
    select, input {
      width: 100%;
      margin: 6px 0;
      padding: 6px;
    }
  `;

  private convert() {
    let temp = this.value;

    // Convert to Celsius
    if (this.from === "f") temp = (temp - 32) * 5 / 9;
    if (this.from === "k") temp = temp - 273.15;

    // Convert from Celsius
    if (this.to === "f") temp = (temp * 9 / 5) + 32;
    if (this.to === "k") temp = temp + 273.15;

    this.result = Number(temp.toFixed(2));
  }

  render() {
    return html`
      <div class="box">
        <h3>Temperature Converter</h3>

        <input
          type="number"
          .value=${this.value}
          @input=${(e: any) => {
            this.value = Number(e.target.value);
            this.convert();
          }}
        />

        <select @change=${(e: any) => {
          this.from = e.target.value;
          this.convert();
        }}>
          <option value="c">Celsius</option>
          <option value="f">Fahrenheit</option>
          <option value="k">Kelvin</option>
        </select>

        <select @change=${(e: any) => {
          this.to = e.target.value;
          this.convert();
        }}>
          <option value="c">Celsius</option>
          <option value="f">Fahrenheit</option>
          <option value="k">Kelvin</option>
        </select>

        <p><strong>Result:</strong> ${this.result}</p>
      </div>
    `;
  }
}
