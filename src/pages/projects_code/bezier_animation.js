import React from 'react';
import p5 from 'p5';

export default class BezierAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            p5instance: '',
            showTangents: true
        };
        this.pauseplay_handleClick = this.pauseplay_handleClick.bind(this);
        this.reset_handleClick = this.reset_handleClick.bind(this);
        this.tangentsonoff_handleClick = this.tangentsonoff_handleClick.bind(this);
        this.myRef = React.createRef();
    }

    //p5 instance mode to create a sketch, p is a p5 object
    SketchCode = (p) => {
        /*
        Created by: nick-nsc
        Description: A p5.js sketch with an animated Bezier curve. Setup contains two fixed points A and C (black) as
        well as a control point B (blue) which may be repositioned by left-clicking in the canvas.
        */

        //3 Points: A, B, C
        let A;
        let B;
        let C;

        //Mover: Start & End of the animated tangent; Adder is for the animation per frame
        let MoverStart;
        let MoverEnd;
        let AdderStart;
        let AdderEnd;

        //t controls the animation speed; when counter reaches 1 the animation will stop
        const t = 0.005;
        let counter = 0;

        //animation options
        let showTangents = this.state.showTangents;

        p.setup = () => {
            //sketch settings
            p.createCanvas(700, 500);
            p.frameRate(30);
            
            //initially set up the location of the 3 points
            A = p.createVector(p.width/4, 3*p.height/4);
            B = p.createVector(p.width/2, p.height/4);
            C = p.createVector(3*p.width/4, 3*p.height/4);
            
            //call the actual setup
            DoThisToSetup();
        }

        p.draw = () => {
            if(counter <= 1) {
                //draw the tangent
                if(showTangents) {
                    p.push();
                    p.stroke(0, 100);
                    p.line(MoverStart.x, MoverStart.y, MoverEnd.x, MoverEnd.y);
                    p.pop();
                }
                
                //use the counter to draw ellipses on the tangent according to the progress (using counter variable)
                p.push();
                p.fill(0,200,0,200);
                p.noStroke();
                p.ellipse(MoverStart.x+(MoverEnd.x-MoverStart.x)*counter, MoverStart.y+(MoverEnd.y-MoverStart.y)*counter, 8, 8);
                p.pop();
                
                //move the tangent by t*100 percent
                MoverStart.x += t * AdderStart.x;
                MoverStart.y += t * AdderStart.y;
                MoverEnd.x += t * AdderEnd.x;
                MoverEnd.y += t * AdderEnd.y;
                
                //remember the progress
                counter += t;
            }
        
        }

        p.mouseClicked = () => {
            if(p.mouseX > 0 && p.mouseX <= p.width && p.mouseY > 0 && p.mouseY <= p.height) {
                //this function repositions the control point B and resets the animation
                B.x = p.mouseX;
                B.y = p.mouseY;
                
                DoThisToSetup(p.mouseX, p.mouseY);
                
                counter = 0;
            }        
        }

        function DoThisToSetup() {
            //re-setup the location of A and C as these points shall be in a fixed position
            A = p.createVector(p.width/4, p.height/2);
            C = p.createVector(3*p.width/4, p.height/2);
            
            //tangent starts from A to B; Start moves from A to B and End moves from B to C
            MoverStart = A;
            MoverEnd = B;
            AdderStart = p.createVector(B.x-A.x, B.y-A.y);
            AdderEnd = p.createVector(C.x-B.x, C.y-B.y);
            
            //clear the screen
            p.background(200);
            
            //set up the lines connecting the 3 points
            if(showTangents) {
                p.push();
                p.stroke(255,0,0);
                p.strokeWeight(3);
                p.line(A.x, A.y, B.x, B.y);
                p.line(B.x, B.y, C.x, C.y);
                p.pop();
            }
            
            //set up the 3 points
            p.push();
            p.fill(0);
            p.ellipse(A.x, A.y, 15, 15);
            p.fill(0,0,255);
            p.ellipse(B.x, B.y, 15, 15);
            p.fill(0);
            p.ellipse(C.x, C.y, 15, 15);
            p.pop();
        }
    }

    //after rendering, create the p5 instance and attach it to the given DOM node
    componentDidMount() {
        this.myP5 = new p5(this.SketchCode, this.myRef.current);
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
        this.myP5 = new p5(this.SketchCode, this.myRef.current);
        this.setState({p5instance: this.myP5});
    }

    tangentsonoff_handleClick() {
        //toggle the trace state and reset the sketch after that
        this.setState({showTangents: !this.state.showTangents}, () =>
            {this.reset_handleClick()}
        ); 
    }

    render() {
        return(
            <main style={{ 'marginLeft': '15%' }}>
                <div>
                    <h1>Animated Bezier curve</h1>
                    <h3>Click to reposition the control point!</h3>
                </div>
                <div ref={this.myRef}>
                    
                </div>
                <div>
                    Created by <a href='http://github.com/nick-nsc/' target='_blank' rel='noreferrer'>nick-nsc</a>.
                </div>
                <br />
                <button name="pauseplay" onClick={this.pauseplay_handleClick}>
                    {this.state.p5instance._loop === true ? 'Pause' : 'Play'}
                </button>
                <button name="reset" onClick={this.reset_handleClick}>
                    Reset
                </button>
                <button name="tangentsonoff" onClick={this.tangentsonoff_handleClick}>
                    Toggle Tangents
                </button>
            </main>
        )
    }
}
