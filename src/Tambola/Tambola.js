import React, {Component} from 'react';
import Board from "../Board/Board";
import Generate from "../Generate/Generate";
import classes from './tambola.module.css'
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://192.168.1.4:4001";
const socket = socketIOClient(ENDPOINT);

class Tambola extends Component{

    constructor(props) {
        super(props);
        this.state = {random: 0, generatedNumber: [], isButtonDisabled: false, isAuthenticated: false};
        this.generateNumberHandler = this.generateNumberHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
        this.resetGameHandler = this.resetGameHandler.bind(this);
    }


    componentDidMount() {
        socket.on("newNumber", data => {
            console.log("newNumber");
            console.log(data);
            if (data.random && data.generatedNumber){
                this.setState({random: data.random, generatedNumber: data.generatedNumber})
            }
        });
    }

    generateNumberHandler = () => {
        var min = 1;
        var max = 91;

        if (this.state.generatedNumber.length === 90){
            alert("House Full");
            return true;
        }
        // this.setState({
        //     isButtonDisabled: true
        // });
        // setTimeout(() => this.setState({ isButtonDisabled: false }), 2000);

        while (true){
            var random =  parseInt(min + (Math.random() * (max-min)));
            let generatedNumber = this.state.generatedNumber;
            if (!generatedNumber.includes(random)){
                generatedNumber.push(random)
                this.setState({random: random, generatedNumber: generatedNumber})
                socket.emit("number", {random: random, generatedNumber: generatedNumber});
                break;
            }
        }
    }

    resetGameHandler = () => {
        this.setState({random: 0, generatedNumber: [], isButtonDisabled: false});
    }

    loginHandler = (username, password) => {
        console.log("loginHandler");
        console.log(username, password);
        if (username == "admin" && password == "admin@123"){
            this.setState({isAuthenticated: true});
        }
    }

    render() {
        return (
            <div key={classes.Tambola} className={classes.Tambola}>
                <Generate
                    random={this.state.random}
                    generateNumberHandler={this.generateNumberHandler}
                    resetGameHandler={this.resetGameHandler}
                    isButtonDisabled={this.state.isButtonDisabled}
                    isAuthenticated={this.state.isAuthenticated}
                />
                <Board
                    generatedNumber={this.state.generatedNumber}
                    loginHandler={this.loginHandler}
                />
            </div>
        )
    }
}

export default Tambola;