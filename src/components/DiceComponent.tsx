
import React, { Component } from "react";
import React, {useEffect, useState} from "react";
import React, {useEffect, useState} from "react";
import React, {useEffect, useState} from "react";


type DiceState = {
    seed: number,
    answer: number,
    count: number,
    correctAnswer: boolean | undefined
}

// type DiceState = {
//     seed: number,
//     answer: number,
//     count: number,
//     correctAnswer: boolean | undefined
// }



// type DiceState = {
//     seed: number,
//     answer: number,
//     count: number,
//     correctAnswer: boolean | undefined
// }




class DiceComponent extends Component<{}, DiceState> {

    constructor(props: any, state: DiceState) {
        super(props, state);

        this.handleInput = this.handleInput.bind(this);
        this.lessOrEqual = this.lessOrEqual.bind(this);
        this.greaterNumber = this.greaterNumber.bind(this);

    }



    state = {
        seed: 5,
        answer: 0,
        count: 0,
        correctAnswer: undefined

    }

    handleInput(event:any) {
        this.setState({
            answer: event.target.value
        });
    }

    lessOrEqual() {
        const userAnswer = this.asnwerIsSmaller(this.state.answer);
        this.setState({
            correctAnswer: userAnswer
        });

        this.regenerateNumber();
    }

    greaterNumber() {
        const userAnswer = this.answerIsLarger(this.state.answer);
        this.setState({
            correctAnswer: userAnswer
        });
        this.regenerateNumber();
    }



    getRandomNumber(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }

    asnwerIsSmaller(answer: number): boolean {
        return this.state.seed <=7;
    }

    answerIsLarger(answer: number): boolean {
        return this.state.seed > 7;
    }

    regenerateNumber() {

        const randomNumber = this.getRandomNumber(1, 11);

        this.setState({
            seed: randomNumber
        }, ()=> {
            console.log('New generated number is: ' + this.state.seed);
        });

        
    }

    checkCount() {
        return this.state.count < 3;
    }


    render() {

        return (
            <div style={{marginTop:'5em'}}>
                
                <h3>Guess the number: </h3>
                {/* <input value={this.state.answer} onChange={this.handleInput} /> */}
                <button className='counter-button counter-button-increment' onClick={this.lessOrEqual}> Less Than or Equal to 7</button>
                <button className='counter-button counter-button-decrement' onClick={this.greaterNumber}>Greater than 7</button>
                <p style={{display: this.state.correctAnswer===true ? 'block' : 'none'}}>Correct Answer !!</p>
                <p style={{display: this.state.correctAnswer===false ? 'block' : 'none'}}>Wrong Answer !!</p>
            </div>
        );

    }


}

export default DiceComponent;
