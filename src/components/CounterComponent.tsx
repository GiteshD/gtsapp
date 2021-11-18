import React, {Component} from 'react';
import '../css/Counter.css'


type CounterState = {
    count: number,
    alert: boolean
}


class CounterComponent extends Component<{}, CounterState> {
    
    var dummy;
    var dummy2;

    constructor(props: any, state: any) {
        super(props, state)

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);
    }
    state = {
        count: 0,
        alert: false
    }

    componentWillUnmount() {

        console.log('inside comp will mount');
        this.setState({
            count: 0
        });
    }


    increase() {

        /*
      this.setState({
          count: this.state.count+1
      })

      */


        this.setState((state) => ({
            alert: false,
            count: state.count + 1
        }))
    }

    decrease() {

        this.setState((state) => ({
            alert: state.count == 0 ? true : false,
            count: state.count == 0 ? 0 : state.count - 1,
        }
        ))
    }

    reset() {
        this.setState((state) => ({
            count: 0,
            alert: false
        }
        ))
    }

    render() {
        const count = this.state.count;
        console.log('state of state is' + this.state)

        return (
            <div>
                <h1>Count is: <span style={{color: '#222121'}}>{count}</span></h1>
                <button className='counter-button counter-button-increment' onClick={this.increase}>Increase</button>
                <button className='counter-button counter-button-decrement' onClick={this.decrease}>Decrease</button>
                <button className='counter-button counter-button-reset' onClick={this.reset}>Rest</button>

                <h3 style={{color:'red', display: this.state.alert? 'block': 'none'}}>cannnot decrement further</h3>
            </div>
        );
    }
}

export default CounterComponent;
