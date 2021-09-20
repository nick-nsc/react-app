import React from 'react';
import p5 from 'p5';

//p5 instance mode to create a sketch, p is a p5 object
const SketchCode = (p) => {
                
    /*
    * @name Spirograph
    * @description This sketch uses simple transformations to create a
    * Spirograph-like effect with interlocking circles (called sines).
    * Press the spacebar to switch between tracing and showing the underlying geometry.<br>
    * Example created by <a href='http://lukedubois.com/' target='_blank'>R. Luke DuBois</a>.<br>
    * <a href='http://en.wikipedia.org/wiki/Spirograph'>http://en.wikipedia.org/wiki/Spirograph</a>
    */
    
    let NUMSINES = 5; // how many of these things can we do at once?
    let sines = new Array(NUMSINES); // an array to hold all the current angles
    let rad; // an initial radius value for the central sine

    // play with these to get a sense of what's going on:
    let fund = 0.005; // the speed of the central sine
    let ratio = 1; // what multiplier for speed is each additional sine?
    let alpha = 50; // how opaque is the tracing system

    let trace = true; // are we tracing?

    //setup the canvas
    p.setup = () => {
        p.createCanvas(710, 400);

        rad = p.height / 4; // compute radius for central circle
        p.background(200); // clear the screen

        for (let i = 0; i<sines.length; i++) {
            sines[i] = p.PI; // start EVERYBODY facing NORTH
        }
    }

    //drawing stuff
    p.draw = () => {
        if (!trace) {
            p.background(200); // clear screen if showing geometry
            p.stroke(0, 255); // black pen
            p.noFill(); // don't fill
        }
        
        // MAIN ACTION
        p.push(); // start a transformation matrix
        p.translate(p.width / 2, p.height / 2); // move to middle of screen
    
        for (let i = 0; i < sines.length; i++) {
            let erad = 0; // radius for small "point" within circle... this is the 'pen' when tracing
            // setup for tracing
            if (trace) {
                p.stroke(0, 0, 255 * (p.float(i) / sines.length), alpha); // blue
                p.fill(0, 0, 255, alpha / 2); // also, um, blue
                erad = 5.0 * (1.0 - p.float(i) / sines.length); // pen width will be related to which sine
            }
            let radius = rad / (i + 1); // radius for circle itself
            p.rotate(sines[i]); // rotate circle
            if (!trace) p.ellipse(0, 0, radius * 2, radius * 2); // if we're simulating, draw the sine
            p.push(); // go up one level
            p.translate(0, radius); // move to sine edge
            if (!trace) p.ellipse(0, 0, 5, 5); // draw a little circle
            if (trace) p.ellipse(0, 0, erad, erad); // draw with erad if tracing
            p.pop(); // go down one level
            p.translate(0, radius); // move into position for next sine
            sines[i] = (sines[i] + (fund + (fund * i * ratio))) % p.TWO_PI; // update angle based on fundamental
        }
    
        p.pop(); // pop down final transformation
    }
}

export default class Spirograph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            p5instance: '',
        };
        this.pauseplay_handleClick = this.pauseplay_handleClick.bind(this);
        this.reset_handleClick = this.reset_handleClick.bind(this);
        this.myRef = React.createRef();
    }

    //after rendering, create the p5 instance and attach it to the given DOM node
    componentDidMount() {
        this.myP5 = new p5(SketchCode, this.myRef.current);
        this.setState({p5instance: this.myP5});
    }

    pauseplay_handleClick() {
        //do not redraw/rerender: instead call noloop/loop() on the active instance
        if (this.state.p5instance._loop) {
            this.state.p5instance.noLoop();
        } else {
            this.state.p5instance.loop();
        }
        //apply changes to the p5instance state with setState(), so the component will update e.g. the button
        let newInstance = this.state.p5instance;
        this.setState({p5instance: newInstance});
    }

    reset_handleClick() {
        //remove the sketch canvas, create a new instance and bind it to the referenced <dir>
        this.state.p5instance.remove();
        this.myP5 = new p5(SketchCode, this.myRef.current);
        this.setState({p5instance: this.myP5});
    }

    render() {
        return(
            <main style={{ 'marginLeft': '15%' }}>
                <div>
                    <h1>Spirograph</h1>
                </div>
                <div ref={this.myRef}>

                </div>
                <div>
                    Credits: Created by <a href='http://lukedubois.com/' target='_blank' rel='noreferrer'>R. Luke DuBois</a>.
                </div>
                <br />
                <button name="pauseplay" onClick={this.pauseplay_handleClick}>
                    {this.state.p5instance._loop === true ? 'Pause' : 'Play'}
                </button>
                <button name="reset" onClick={this.reset_handleClick}>
                    Reset
                </button>
            </main>
        )
    }
}
