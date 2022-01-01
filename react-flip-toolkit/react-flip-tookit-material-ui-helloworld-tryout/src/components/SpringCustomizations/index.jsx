import React from "react";
import ReactDOM from "react-dom";
import { Flipper, Flipped } from "react-flip-toolkit";
import "sanitize.css";
import "./styles.css";

// Preset values:
const springPresets = {
  noWobble: { stiffness: 200, damping: 26 },
  gentle: { stiffness: 120, damping: 14 },
  veryGentle: { stiffness: 130, damping: 17 },
  wobbly: { stiffness: 180, damping: 12 },
  stiff: { stiffness: 260, damping: 26 },
};

const items = [
  { id: 1, color: "#ff4f66" },
  { id: 2, color: "#7971ea" },
  { id: 3, color: "#5900d8" },
  { id: 4, color: "#ff4f66" },
  { id: 5, color: "#7971ea" },
  { id: 6, color: "#5900d8" },
  { id: 7, color: "#ff4f66" },
  { id: 8, color: "#7971ea" },
  { id: 9, color: "#5900d8" },
];

class Container extends React.Component {
  state = {
    order: items.map((item) => item.id),
    preset: "noWobble",
    stagger: "forward",
    staggerSpeed: 0.1,
    spring: {
      stiffness: 100,
      damping: 10,
    },
  };

  shuffleItems = () => {
    this.setState({
      order: this.state.order.slice().reverse(),
    });
  };
  render() {
    return (
      <div className="container">
        <div>
          <fieldset className="spring-fieldset">
            <legend> Spring Presets</legend>
            {Object.keys(springPresets).map((preset) => (
              <label>
                <input
                  type="radio"
                  name="preset"
                  checked={this.state.preset === preset}
                  onChange={(e) => {
                    this.setState({
                      preset,
                    });
                    this.shuffleItems();
                  }}
                />
                {preset}
              </label>
            ))}
          </fieldset>
          <fieldset>
            <legend>Custom Spring </legend>

            {["stiffness", "damping"].map((param) => {
              return (
                <label>
                  {param}:
                  <input
                    type="number"
                    value={
                      this.state.preset
                        ? springPresets[this.state.preset][param]
                        : this.state.spring[param]
                    }
                    onChange={(e) => {
                      this.setState({
                        preset: null,
                        spring: Object.assign({}, this.state.spring, {
                          [param]: parseInt(e.target.value),
                        }),
                      });
                      this.shuffleItems();
                    }}
                  />
                </label>
              );
            })}
          </fieldset>

          <fieldset>
            <legend>Stagger</legend>

            {["forward", "reverse", "none"].map((stagger) => {
              return (
                <label>
                  <input
                    type="radio"
                    name="stagger"
                    checked={this.state.stagger === stagger}
                    onChange={() => {
                      this.setState({
                        stagger: stagger,
                      });
                      this.shuffleItems();
                    }}
                  />
                  {stagger}
                </label>
              );
            })}

            <label>
              Speed
              <input
                type="number"
                name="stagger-speed"
                step="0.1"
                min="0"
                max="1"
                value={this.state.staggerSpeed}
                onChange={(ev) => {
                  this.setState({
                    staggerSpeed: parseFloat(ev.target.value),
                  });
                  this.shuffleItems();
                }}
              />
            </label>
          </fieldset>
        </div>
        <div className="square-container">
          <Flipper
            flipKey={this.state.order}
            spring={this.state.preset ? this.state.preset : this.state.spring}
            staggerConfig={{
              default: {
                reverse: this.state.stagger === "reverse",
                speed: this.state.staggerSpeed,
              },
            }}
          >
            <main className="main" onClick={this.shuffleItems}>
              {this.state.order
                .map((id) => items.filter((item) => item.id === id)[0])
                .map((item, i) => {
                  return (
                    <Flipped
                      flipId={`square-${item.id}`}
                      stagger={this.state.stagger !== "none"}
                    >
                      <div
                        className="item"
                        style={{ backgroundColor: item.color }}
                      />
                    </Flipped>
                  );
                })}
            </main>
          </Flipper>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<Container />, document.querySelector("#root"));
export default Container;
