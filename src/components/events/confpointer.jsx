import React, { Component } from 'react';
import ConfettiGenerator from 'confetti-js';
import './Confetti.css';

class Confetti extends Component {
  constructor(props) {
    super(props);
    this.confettiRef = React.createRef();
    this.animationFrame = null;
    
    // Initialize confetti object here
    const confettiSettings = {
      target: this.confettiRef.current,
      max: this.props.numberOfPieces,
    };
    this.confetti = new ConfettiGenerator(confettiSettings);
  }

  componentDidMount() {
    const { numberOfPieces, duration } = this.props;
    const confettiSettings = {
      target: this.confettiRef.current,
      max: numberOfPieces,
    };
    this.confetti = new ConfettiGenerator(confettiSettings);

    const containerWidth = this.confettiRef.current.parentNode.offsetWidth;
    this.confettiRef.current.width = containerWidth;

    this.confetti.render();

    this.animationFrame = requestAnimationFrame(this.animate);
  }

  animate = () => {
    const { duration } = this.props;
    const containerHeight = window.innerHeight;

    let allParticlesGone = true;

    this.confetti.confetti.forEach((particle) => {
      particle.y += 2; // Adjust the speed if needed

      if (particle.y <= containerHeight) {
        allParticlesGone = false;
      }
    });

    this.confetti.render();

    if (allParticlesGone) {
      this.confetti.clear();
      this.confettiRef.current.style.opacity = '0';
      cancelAnimationFrame(this.animationFrame);
    } else {
      this.animationFrame = requestAnimationFrame(this.animate);
    }
  };

  componentWillUnmount() {
    if (this.confetti) {
      this.confetti.clear();
    }
    cancelAnimationFrame(this.animationFrame);
  }

  render() {
    return <canvas ref={this.confettiRef} className="confetti-container"></canvas>;
  }
}

export default Confetti;
