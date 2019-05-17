import React, { Component, createRef } from 'react';
import { number, func, shape, bool, arrayOf } from 'prop-types';
import Canvas from './components/Canvas';
import { getCanvasPosition } from './utils/formulas';

class App extends Component {
  constructor(props) {
    super(props);

    this.canvasRef = createRef();

    this.trackMouse = this.trackMouse.bind(this);
    this.update = this.update.bind(this);
    this.shoot = this.shoot.bind(this);
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

  shoot() {
    const { shoot } = this.props;
    shoot(this.canvasMousePosition);
  }

  onResize() {
    const canvas = this.canvasRef.current;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
  }

  render() {
    const { angle, gameState, startGame } = this.props;

    return (
      <div className="App">
        <Canvas
          angle={angle}
          gameState={gameState}
          startGame={startGame}
          trackMouse={this.trackMouse}
          shoot={this.shoot}
          ref={this.canvasRef}
        />
      </div>
    );
  }
}

App.propTypes = {
  angle: number.isRequired,
  gameState: shape({
    started: bool.isRequired,
    kills: number.isRequired,
    lives: number.isRequired,
    flyingObjects: arrayOf(
      shape({
        position: shape({
          x: number.isRequired,
          y: number.isRequired,
        }).isRequired,
        id: number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  startGame: func.isRequired,
  moveObjects: func.isRequired,
  shoot: func.isRequired,
};

export default App;
