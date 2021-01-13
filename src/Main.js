import React, {Component} from "react"
import ReactDOM from "react-dom"

class Main extends Component{
    constructor(){
        super()
        this.state={
            firstName: "",
            lastName: "",
            email: "",
            mobile:""
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
    
            alert('The form is submitted: ' + this.state);
        
            fetch('http://localhost:3000/1/', {
                method: 'POST',
                body: JSON.stringify(this.state)
              }).then(function(response) {
                console.log(response)
                return response.json();
              });
        
            event.preventDefault();
    }
render(){
    return(
        <div>
            <header>Hello from Customer Information</header> 
            <form onSubmit={this.handleSubmit}>
                <input type="text" name={this.state.firstName} placeholder="First Name" onChange={this.handleChange}/>
                <h1>{this.state.firstName}</h1>

                <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
                <h1>{this.state.lastName}</h1>

                <input type="text" name="email" placeholder="Email" onChange={this.handleChange}/>
                <h1>{this.state.email}</h1>

                <input type="text" name="mobile" placeholder="Phone Number" onChange={this.handleChange}/>
                <h1>{this.state.mobile}</h1>

                <button type="submit">Submit</button>
            </form>  
        </div>
        
        )
    }
}

export default Main