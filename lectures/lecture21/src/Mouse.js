import React from 'react';

class Mouse extends React.Component {
    state = { x: 0, y: 0 };

    handleMouseMove = (event) => {
        this.setState({ x: event.clientX, y: event.clientY });
    };

    render() {
        const style = { height: "100vh", width: "100%", border: "1px solid" };

        return (
            <div style={style}
                onMouseMove={this.handleMouseMove}
            >
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default Mouse;