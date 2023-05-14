import React from "react"
import Header from "./components/Header"
import Links from "./components/Links"
import CreateReport from "./components/CreateReport"
import UpdateDB from "./components/UpdateDB"

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            links: [

            ]
        }
        this.crtReport = this.crtReport.bind(this)
    }
    render(){
        return (
        <div>
            <Header title="CVE Reporter" />
            <main>
                
                <CreateReport onCrt={this.crtReport}/>
            </main>
                <aside>
                    <Links links={this.state.links} />   
                </aside>
                <aside>
                    <label><h3>Update CVE DB before request:</h3></label>
                    <UpdateDB onCrt={this.crtReport}/>   
                </aside>
        </div>
        )
    }

    crtReport(replink){
        //console.log(replink)
        const id = this.state.links.length + 1
        this.setState({ links: [{ id, ...replink }, ...this.state.links] })
    }
}

export default App