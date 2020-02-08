import React, { Component } from 'react';

export default class Canvas extends Component {

    constructor(props) {
        super(props);


    }

    componentDidMount() {
        const HEIGHT = this.canvas.getBoundingClientRect().height;
        const WIDTH = this.canvas.getBoundingClientRect().width;

        this.HEIGHT = HEIGHT;
        this.WIDTH = WIDTH;

        this.canvas.height = HEIGHT;
        this.canvas.width = WIDTH;

        this.context = this.canvas.getContext('2d');
        //this.draw();
    }

    draw = () => {

        this.context.clearRect(0, 0, this.WIDTH, this.HEIGHT);
        // clear canvas
        // draw triangle background
        /*
        this.context.beginPath();
        this.context.moveTo(0, this.HEIGHT);
        this.context.lineTo(800, this.HEIGHT);
        this.context.lineTo(0, 100);
        this.context.fillStyle = 'green';
        this.context.fill();
        */

        this.context.beginPath();
        this.context.fillStyle = 'rgba(20, 20, 20, 0.9)';
        this.context.arc(0, this.HEIGHT, 25, 0, Math.PI, true);
        this.context.fill();


        this.drawId = requestAnimationFrame(this.draw);
    }

    render() {
        return <canvas ref={el => this.canvas = el }/>
    }
}
