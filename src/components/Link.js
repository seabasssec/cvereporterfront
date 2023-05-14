import React from "react"

class Link extends React.Component {
    //link = this.props.link
    render() {
        return (
            <div className="link">
                <a href={this.props.replink} style={{ textDecoration: 'none', color: 'white' }}>{this.props.replink}</a>
            </div>
        )
    }
}

export default Link