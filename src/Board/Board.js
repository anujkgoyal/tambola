import React, {Component} from 'react';
import Number from "../Number/Number";
import classes from './board.module.css';
import Login from "../Login/Login";

class Board extends Component{
    render() {

        let allNumber = [];
        for (let i=1; i<=90;i++){
            allNumber.push(<Number key={i} generatedNumber={this.props.generatedNumber} number={i}/>);
        }

        return (
            <div key={classes.Board} className={"container " + classes.Board}>
                <div className={"row"}>
                    <div className={"col-lg-10 col-md-9 col-sm-8"}>
                        {allNumber}
                    </div>
                    <div className={"col-lg-2 col-md-3 col-sm-4"}>
                        <div>Prices</div>
                        <ul>
                            <li>Full House 1</li>
                            <li>Full House 2</li>
                            <li>Full House 3</li>
                            <li>Full House 4</li>
                            <li>Full House 5</li>
                        </ul>
                        <Login loginHandler={this.props.loginHandler} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Board;