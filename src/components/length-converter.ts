import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("length-converter")
export class LengthConverter extends LitElement {

  @state() value = 0;
  @state() fromUnit = "meter";
  @state() toUnit = "kilometer";
  @state() result = 0;

  static styles = css`
    .box {
      border: 1px solid #ccc;
      padding: 16px;
      margin-bottom: 20px;
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
    const factors: any = {
      meter: 1,
      kilometer: 1000,
      centimeter: 0.01
    };

    this.result =
      (this.value * factors[this.fromUnit]) / factors[this.toUnit];
  }

  render() {
    return html`
      <div class="box">
        <h3>Length Converter</h3>

        <input
          type="number"
          .value=${this.value}
          @input=${(e: any) => {
            this.value = Number(e.target.value);
            this.convert();
          }}
        />

        <select @change=${(e: any) => {
          this.fromUnit = e.target.value;
          this.convert();
        }}>
          <option value="meter">Meter</option>
          <option value="kilometer">Kilometer</option>
          <option value="centimeter">Centimeter</option>
        </select>

        <select @change=${(e: any) => {
          this.toUnit = e.target.value;
          this.convert();
        }}>
          <option value="meter">Meter</option>
          <option value="kilometer">Kilometer</option>
          <option value="centimeter">Centimeter</option>
        </select>

        <p><strong>Result:</strong> ${this.result}</p>
      </div>
    `;
  }
}
