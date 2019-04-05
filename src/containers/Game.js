import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = ({ message }) => ({ message });

const Game = connect(mapStateToProps)(App);

export default Game;
