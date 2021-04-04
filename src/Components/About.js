import React, { Component } from "react"
import logo from './Photo.jpg'
class About extends Component {
    render() {
        return(
            <div className="About">
                <img alt={"Grishm"} width={125} src={logo}/> 
                <h3>My Name is Grishm Khurana and I am a student at Saint Mary's University inspiring to be a Data Analyst.</h3>
                <h3>I have experience working on Oracle Database and its Cloud applications.</h3>
            </div>
        )
    }
}
export default About;