import React from 'react';
import classes from './number.module.css';

const Number = (props) => {
    let checkClasses = classes.Number + " " + (props.generatedNumber && props.generatedNumber.includes(props.number) ?  classes.Selected : "");

    return (
        <div key={props.number} id={props.number} className={checkClasses}>
            {props.number}
        </div>
    )

}
export default Number;