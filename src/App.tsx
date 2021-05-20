import React, { ReactPropTypes, useState } from "react";
import "./App.css";
import { ArrayOutput } from "./components/ArrayOutput";
import { makeArray } from "./utils/utilFunctions";
import { SortingControlls } from "./components/SortingControlls";

type AppProps = any;

type AppState = {
  numberArraySize: number;
  numberArray: number[];
};

class App extends React.Component<AppProps, AppState> {
  state: AppState;
  defaultArrSize: number;

  constructor(props: AppProps) {
    super(props);
    this.defaultArrSize = 50

    this.state = {
      numberArraySize: this.defaultArrSize,
      numberArray: makeArray(this.defaultArrSize, 100),
    };
  }

  setNumberArraySize(arrSize: number) {
    this.setState({ numberArraySize: arrSize });
  }

  setNumberArr(newArr: number[]) {
    this.setState({ numberArray: newArr });
  }

  render() {
    return (
      <div>
        <div className="main-wrapper">
          <SortingControlls
            setArray={(arr:number[]) => this.setNumberArr(arr)}
            array={this.state.numberArray}
            setArraySize={(n:number) => this.setNumberArraySize(n)}
            arraySize={this.state.numberArraySize}
          />
          <div className="output-wrapper">
            <ArrayOutput array={this.state.numberArray} />
          </div>
        </div>

        <footer>
          <span>Made with ❤ by Pedro Goulart</span>
        </footer>
      </div>
    );
  }
}

export default App;
