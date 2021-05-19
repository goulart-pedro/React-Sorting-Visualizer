import React, { useState } from "react";
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

  constructor(props: any) {
    super(props);

    this.state = {
      numberArraySize: 50,
      numberArray: makeArray(50, 100),
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
