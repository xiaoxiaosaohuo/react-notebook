import './index.css'

var small = {
    src: "https://unsplash.it/400/300?image=1050",
    width: 400,
    height: 300
};

var large = {
    src: "https://unsplash.it/1600/1200?image=1050",
    width: 1600,
    height: 1200
};

class ImageViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top: 0,
            left: 0,
            circleClassName: "none"
        }
        this.ref = React.createRef();
    }
    componentDidMount() {

        this.containerWidth = this.ref.current.offsetLeft;
        this.containerHeight = this.ref.current.offsetTop;
    }
    onMouseEnter = (e) => {
        // console.log("enter",e);
        const { clientX, clientY } = e;
        this.setState({
            top: (clientY - 100) < 0 ? clientY : clientY - 100,
            left: clientX,
            circleClassName: 'block'
        })
    }
    onMouseMove = (e) => {
        const { clientX, clientY, pageX, pageY } = e;
        let left = pageX - this.containerWidth - 100 / 2;
        let top = pageY - this.containerHeight - 100 / 2;
        if (left < 0) {
            left = 0;
        }
        if (top < 0) {
            top = 0;
        }
        if (left > this.ref.current.offsetWidth - 100) {
            left = this.ref.current.offsetWidth - 100
        }
        if (top > this.ref.current.offsetHeight - 100) {
            top = this.ref.current.offsetHeight - 100
        }
        this.setState({
            top: top,
            left: left,
            circleClassName: 'block'
        })
        // console.log("move",clientX,clientY);

    }

    onMouseLeave = (e) => {
        this.setState({
            circleClassName: "none"
        })
    }
    render() {
        const { left, top, circleClassName } = this.state;
        const circleStyle = { transform: `translate(${left}px,${top}px)`, backgroundPosition: `${-(left) * 4}px ${-(top) * 4}px`, display: circleClassName }
        return (
            <div className="container"
                ref={this.ref}
                onMouseEnter={this.onMouseEnter}
                onMouseMove={this.onMouseMove}
                onMouseLeave={this.onMouseLeave}
            >

                <img
                    src="https://unsplash.it/400/300?image=1050"

                ></img>

                <div
                    className="cirlce"
                    style={{ ...circleStyle }}

                >

                </div>
            </div>
        )
    }
}

export default ImageViewer;
