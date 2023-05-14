import React from "react"
import axios from "axios"

class CreateReport extends React.Component {
    crtLnk = {}
    constructor(props) {
        super(props)
        this.state = {
            first: "",
            last: "",
            part: "o",
            vendor: "",
            product: "",
            version: "",
            update: "",
            edition: "",
            language: "",
            sw_edition: "",
            target_sw: "",
            target_hw: "",
            other: ""
        }
        this.baseState = this.state
    }

    resetForm = () => {
        this.setState(this.baseState)
    }

    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <label><h3>Enter request parameters:</h3></label>
                <input placeholder="From year" onChange={(e) => this.setState({ first: e.target.value})}/>
                <input placeholder="To year" onChange={(e) => this.setState({ last: e.target.value})}/>
                <p>Chose your target:</p>
                <select value={this.state.part} onChange={(e) => this.setState({ part: e.target.value})}>
                <option value="o">OS</option>
                <option value="a">Application</option>
                <option value="h">Hardware</option>
                </select>
                <input placeholder="Vendor" onChange={(e) => this.setState({ vendor: e.target.value})}/>
                <input placeholder="Product" onChange={(e) => this.setState({ product: e.target.value})}/>
                <input placeholder="Version" onChange={(e) => this.setState({ version: e.target.value})}/>
                <input placeholder="Update" onChange={(e) => this.setState({ update: e.target.value})}/>
                <input placeholder="Edition" onChange={(e) => this.setState({ edition: e.target.value})}/>
                <input placeholder="Language" onChange={(e) => this.setState({ language: e.target.value})}/>
                <input placeholder="Software edition" onChange={(e) => this.setState({ sw_edition: e.target.value})}/>
                <input placeholder="Target software" onChange={(e) => this.setState({ target_sw: e.target.value})}/>
                <input placeholder="Target hardware" onChange={(e) => this.setState({ target_hw: e.target.value})}/>
                <input placeholder="Other" onChange={(e) => this.setState({ other: e.target.value})}/>
                
                <button type="button" onClick={() => {
                    axios.post('http://127.0.0.1:8080/report', this.create = {
                        first: this.state.first,
                        last: this.state.last,
                        part: this.state.part,
                        vendor: this.state.vendor,
                        product: this.state.product,
                        version: this.state.version,
                        update: this.state.update,
                        edition: this.state.edition,
                        language: this.state.language,
                        sw_edition: this.state.sw_edition,
                        target_sw: this.state.target_sw,
                        target_hw: this.state.target_hw,
                        other: this.state.other,
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
                }>Create report</button>
            </form>
            
        )
    }
}

export default CreateReport