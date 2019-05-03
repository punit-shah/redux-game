import React, { Component, createRef } from 'react';
import { number, func } from 'prop-types';
import Canvas from './components/Canvas';
import { getCanvasPosition } from './utils/formulas';

class App extends Component {
  constructor(props) {
    super(props);

    this.canvasRef = createRef();

    this.trackMouse = this.trackMouse.bind(this);
    this.update = this.update.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    this.update();
    window.addEventListener('resize', this.onResize);
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  update() {
    const { moveObjects } = this.props;
    moveObjects(this.canvasMousePosition);
    requestAnimationFrame(this.update);
  }

  onResize() {
    const canvas = this.canvasRef.current;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
  }

  render() {
    const { angle } = this.props;

    return (
      <div className="App">
        <Canvas
          angle={angle}
          trackMouse={this.trackMouse}
          ref={this.canvasRef}
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
