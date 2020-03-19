import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        return (
            <div>
              <button
                className="btn btn-primary btn-small m-2"
                onClick={this.props.onReset}
              >
                Reset
              </button>
              { this.props.obj.map(
                  counter => <Counter key={counter.id}
                                      obj={counter}
                                      onDelete={this.props.onDelete}
                                      onIncrement={this.props.onIncrement}
                             />
              )
              }
            </div>
        );
    }
}

export default Counters;
