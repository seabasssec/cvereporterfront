import React from "react"
import Link from "./Link"

class Links extends React.Component {
     
    render() {
        if(this.props.links.length > 0)
            return(
                <div>
                    <label><h3>Your reports:</h3></label>
                    {this.props.links.map((el) => (
                        <Link key={el.id} replink={el.replink}/>
                    ))}
                </div>
            )
        else
            return(
                <div className="link">
                    <h3>You don't have generated CVE reports</h3>
                </div>
            )
    }
}

export default Links