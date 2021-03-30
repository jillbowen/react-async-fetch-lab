// create your App component here
import React, {Component} from 'react' 

class App extends Component {
    
    state = {
        spacePeople: []
    }
    
    render() {
        return(
            <div>
                <h1>People in Space</h1>
                <ul>
                    {this.state.spacePeople.map((person) =>
                        <li>{person.name}</li>
                    )}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    spacePeople: data.people
                })
            })
    }
}

export default App;