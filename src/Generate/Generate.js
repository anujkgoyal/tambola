import React, {Component} from 'react';
import classes from './generate.module.css';
import Number from "../Number/Number";

class Generate extends Component{

    render() {
        return (
            <div className={"container " + classes.Generate}>
                <div key={classes.Generate} className={"row"}>
                    <div className={"col-sm-12 "}>
                        <button className={"btn btn-info"} onClick={this.props.generateNumberHandler}>Generate</button>
                        <div className={classes.Number}>
                            {this.props.random}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Generate;