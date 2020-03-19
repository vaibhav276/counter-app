// import React from 'react';
//
// function App() {
//   return (
//   );
// }
//
// export default App;

import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';

export default class App extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };

    onIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters : counters});
    }

    onDelete = counterId => {
        const newCounters = this.state.counters.filter( c => c.id !== counterId );
        this.setState({counters: newCounters});
    }

    onReset = () => {
        const newCounters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });

        this.setState({ counters: newCounters });
    }

    render() {
        return (
            <React.Fragment>
              <NavBar totalCounters={
                this.state.counters
                    .filter( c => c.value > 0 )
                    .length
              } />
              <main className="container">
                <Counters
                  obj={this.state.counters}
                  onIncrement={this.onIncrement}
                  onDelete={this.onDelete}
                  onReset={this.onReset}
                />
              </main>
            </React.Fragment>
        );
    }
}
