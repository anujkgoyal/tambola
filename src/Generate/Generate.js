import React, {Component} from 'react';
import classes from './generate.module.css';

class Generate extends Component{

    render() {

        let generateBtn = "";
        let resetBtn = "";
        if (this.props.isAuthenticated){
            generateBtn =  <button className={"col-sm-2 btn btn-info"} onClick={this.props.generateNumberHandler} disabled={this.props.isButtonDisabled}>Generate</button>
            resetBtn =     <button className={"col-sm-2 btn btn-danger " + classes.Reset} onClick={this.props.resetGameHandler}>Reset</button>
        }

        return (
            <div className={"container " + classes.Generate}>
                <div key={classes.Generate} className={"row"}>
                    <div className={"col-sm-12 "}>
                        <span className={"col-sm-1"}>Welcome</span>
                        {generateBtn}
                        <div className={"col-sm-3 " + classes.Number}>
                            {this.props.random}
                        </div>
                        {resetBtn}
                    </div>
                </div>
            </div>
        )
    }
}

export default Generate;