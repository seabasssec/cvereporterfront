import React from "react"
import axios from "axios"

class UpdateDB extends React.Component {
    crtLnk = {}
    constructor(props) {
        super(props)
        this.state = {
            first: "",
            last: ""
        }
        this.baseState = this.state
    }

    resetForm = () => {
        this.setState(this.baseState)
    }
  render() {
    return (
        <form ref={(el) => this.myForm = el}>
                <input placeholder="From year" onChange={(e) => this.setState({ first: e.target.value})}/>
                <input placeholder="To year" onChange={(e) => this.setState({ last: e.target.value})}/>
                <button type="button" onClick={() => {
                    axios.post('http://127.0.0.1:8080/updatedb', this.create = {
                        first: this.state.first,
                        last: this.state.last,
                    })
                    .then((response) => {
                        this.crtLnk = {
                            replink: response.data
                        }
                        if(this.props.link)
                            this.crtLnk.id = this.props.link.id
                        this.props.onCrt(this.crtLnk);})
                        .catch((error) => {
                        console.error(error);}
                        );
                    //this.props.onCrt({replink: this.reportlink})
                    this.myForm.reset()
                    this.resetForm()
                }
                }>Update CVE Database</button>
            </form>
    )
  }
}

export default UpdateDB