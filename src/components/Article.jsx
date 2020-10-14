import React, { Component } from "react";


const BASE_PATH = 'http://speller.yandex.net/services',
    SEARCH_PATH = '/spellservice.json',
    SEARCH_PARSM = '/checkText?text=';

class Imput extends Component {

    state = {
        date: '',
        result: [],
        text: '',
    };


    componentDidMount() {
   
    }


    api = (date) => {
        console.log(date)
        fetch(`${BASE_PATH}${SEARCH_PATH}${SEARCH_PARSM}${date}`)
            .then(res => res.json())
            .then(result => this.renewal(result))
            .catch(error => error);
    }

    renewal(result) {
        this.setState({
            date: document.getElementById('textInput').innerText,
            result,
        });
        this.correction(result)
    }


    correction(result) { 
        if (result) {
            if (this.state.result.length !== 0) {

            }
        }
    }

    timerID = (event) => {
        let { date } = this.state;
        this.renewal();
        this.api(date);
        if(event.key){

        }
    };

    render() {
        return (
            <div>
                <div className='input' id='textInput' onKeyDown={this.timerID} type='text' contentEditable="true" />
                <h2>It is {this.state.text}.</h2>
            </div>
        );
    }

}

export default Imput