import React, { Component } from 'react';
import { number, func } from 'prop-types';
import Canvas from './components/Canvas';
import { getCanvasPosition } from './utils/formulas';

class App extends Component {
  componentDidMount() {
    this.trackMouse = this.trackMouse.bind(this);

    this.update();
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  update() {
    const { moveObjects } = this.props;
    moveObjects(this.canvasMousePosition);
    requestAnimationFrame(this.update.bind(this));
  }

  render() {
    const { angle } = this.props;

    return (
      <div className="App">
        <Canvas
          angle={angle}
          trackMouse={event => this.trackMouse(event)}
        />
      </div>
    );
  }
}

App.propTypes = {
  angle: number.isRequired,
  moveObjects: func.isRequired,
};

export default App;
