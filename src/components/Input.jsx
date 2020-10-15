import React, { Component } from "react";
import { Title } from './CorrectText/index';
import { BASE_PATH, SEARCH_PATH, SEARCH_PARSM } from '../constants/index';



class Imput extends Component {
    state = {
        text: '',
        result: [],
    };
    api = (text) => {
        fetch(`${BASE_PATH}${SEARCH_PATH}${SEARCH_PARSM}${text}`)
            .then(res => res.json())
            .then(result => this.renewal(result))
            .catch(error => error);
    }
    renewal(result) {
        this.setState({
            text: document.getElementById('textInput').innerText
        });
        if(result){
            this.setState({
                text: this.resultArr(result),
                result
            });
        }
    }
    resultArr(result){
        const arr = [];
        result.forEach(element => {
           arr.push(element)
        });
        return arr
    }

    timerID = (event) => {

        this.renewal();
        if (event.key === ' ') {
            this.api(document.getElementById('textInput').innerText);
        }
    };
    render() {
        const { text } = this.state
        return (
            <div>
                <div className='input' id='textInput' onKeyUp={this.timerID} type='text' contentEditable="true" />
                <Title text={text} />
            </div>
        );
    }

}

export default Imput