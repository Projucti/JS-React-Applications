import React, {Component} from "react"
import ReactDOM from "react-dom"
import Header from "./Header.js"
import Footer from "./Footer.js";
import Main from "./Main";

class App extends Component{
    constructor(){
        super()

    }
render(){
    return(
        <div>
            <Header/>
            <Main/>
            <Footer/>

        </div>
        
        )
    }
}

export default App