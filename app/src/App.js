import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "tacos",
            formIsHidden: false
        };
        //this.toggleFormVisibility = this.toggleFormVisibility.bind(this);
    }

    toggleFormVisibility(){
        //this.setState({formIsHidden: !this.state.formIsHidden});
        alert('fired');
    }
    
    
    displayRecommendedPlan() {
        ReactDOM.render(<NewUnnamedComponent />, document.getElementById('root'));
    }
    
    render() {
        
        return(
            <Form 
                text={this.state.text} 
                formIsHidden={this.state.formIsHidden}
                toggleFormVisibility={this.toggleFormVisibility()}
            />
                
        ); 
    }
}

export default App;
