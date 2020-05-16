import React, {Component} from 'react';
import Board from "../Board/Board";
import Generate from "../Generate/Generate";
import classes from './tambola.module.css'

class Tambola extends Component{

    state = {random: 0, generatedNumber: []};

    generateNumberHandler = () => {
        var min = 1;
        var max = 91;

        if (this.state.generatedNumber.length == 90){
            alert("House Full");
            return true;
        }

        while (true){
            var random =  parseInt(min + (Math.random() * (max-min)));
            let generatedNumber = this.state.generatedNumber;
            if (!generatedNumber.includes(random)){
                generatedNumber.push(random)
                this.setState({random: random, generatedNumber: generatedNumber})
                break;
            }
        }
    }

    render() {
        return (
            <div key={classes.Tambola} className={classes.Tambola}>
                <h4>Welcome</h4>
                <Generate random={this.state.random} generateNumberHandler={this.generateNumberHandler}/>
                <Board generatedNumber={this.state.generatedNumber}/>
            </div>
        )
    }
}

export default Tambola;