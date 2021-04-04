import React, { Component } from "react"
import Fetchapi from './Fetchapi'
import logo from './Halifax.jpg'
class MyTown extends Component {
    render() {
        return(
            <div className="MyTown">
                <img alt={"Halifax"} width={600} src={logo}/> 
                <h3>Halifax is an Atlantic Ocean port in eastern Canada and is the provincial capital of Nova Scotia. A major business centre, it’s also known for its maritime history. The city’s dominated by the hilltop Citadel, a star-shaped fort completed in the 1850s.</h3>
                <div>
            <Fetchapi/>  
            </div>
            </div>
        )
    }
}
export default MyTown;