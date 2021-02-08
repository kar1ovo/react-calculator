import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: "0",
      isDecimalAdded: false,
      isOperatorAdded: false,
      isStarted: false,
    };
  }

  isOperator = (character) => {
    return ["+", "-", "*", "/"].indexOf(character) > -1;
  };

  append = (character) => {
    if (this.state.equation === "0" && !this.isOperator(character)) {
      if (character === ".") {
        this.setState((state, props) => ({
          equation: state.equation + "" + character,
          isDecimalAdded: true,
        }));
      } else {
        this.setState({
          equation: "" + character,
        });
      }
      this.setState({
        isStarted: true,
      });
      return;
    }

    if (!this.isOperator(character)) {
      if (character === "." && this.state.isDecimalAdded) {
        return;
      }
      if (character === ".") {
        this.setState({
          isDecimalAdded: true,
          isOperatorAdded: true,
        });
      } else {
        this.setState({
          isOperatorAdded: false,
        });
      }
      this.setState((state, props) => ({
        equation: state.equation + "" + character,
      }));
    }

    if (this.isOperator(character) && !this.state.isOperatorAdded) {
      this.setState((state, props) => ({
        equation: state.equation + "" + character,
        isDecimalAdded: false,
        isOperatorAdded: true,
      }));
    }
  };

  calculate = () => {
    // 先将✖️,➗换成*,/
    this.setState((state) => ({
      equation: parseFloat(eval(state.equation).toFixed(9)).toString(), //限制🚫9位
      isDecimalAdded: false,
      isOperatorAdded: false,
    }));
    console.log("calculate");
  };

  calculateToggle = () => {
    if (this.state.isOperatorAdded || !this.state.isStarted) {
      console.log("return");
      return;
    }
    this.setState((state, props) => ({
      equation: state.equation + "*-1",
    }));
    this.calculate();
  };

  calculatePercentage = () => {
    if (this.state.isOperatorAdded || !this.state.isStarted) {
      return;
    }
    this.setState((state, props) => ({
      equation: state.equation + "* 0.01",
    }));
    this.calculate();
  };

  clear = () => {
    this.setState({
      equation: "0",
      isDecimalAdded: false,
      isOperatorAdded: false,
      isStarted: false,
    });
  };

  render() {
    return (
      <div className="calculator">
        <div className="result">{this.state.equation}</div>
        <button onClick={this.clear} className="ac">
          AC
        </button>
        <button onClick={this.calculateToggle} className="plus-minus">
          +/-
        </button>
        <button onClick={this.calculatePercentage} className="percent">
          %
        </button>
        <button onClick={() => this.append("+")} className="add">
          +
        </button>
        <button onClick={() => this.append("-")} className="subtract">
          -
        </button>
        <button onClick={() => this.append("*")} className="multiply">
          *
        </button>
        <button onClick={() => this.append("/")} className="divide">
          /
        </button>
        <button onClick={this.calculate} className="equal">
          =
        </button>

        <button className="number-1" onClick={() => this.append("1")}>
          1
        </button>
        <button className="number-2" onClick={() => this.append("2")}>
          2
        </button>
        <button className="number-3" onClick={() => this.append("3")}>
          3
        </button>
        <button className="number-4" onClick={() => this.append("4")}>
          4
        </button>
        <button className="number-5" onClick={() => this.append("5")}>
          5
        </button>
        <button className="number-6" onClick={() => this.append("6")}>
          6
        </button>
        <button className="number-7" onClick={() => this.append("7")}>
          7
        </button>
        <button className="number-8" onClick={() => this.append("8")}>
          8
        </button>
        <button className="number-9" onClick={() => this.append("9")}>
          9
        </button>
        <button className="number-0" onClick={() => this.append("0")}>
          0
        </button>

        <button className="dot" onClick={() => this.append(".")}>
          .
        </button>
      </div>
    );
  }
}
export default Calculator;
