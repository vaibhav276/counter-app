import React, {Component} from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
              <span className={this.getBadgeClassNames()}>{this.formatValue()}</span>
              <button
                onClick={ () => this.props.onIncrement(this.props.obj)}
                className="btn btn-secondary btn-sm"
              >
                Increment
              </button>
              <button
                onClick = { () => this.props.onDelete(this.props.obj.id) }
                className="btn btn-danger btn-sm m-2"
              >
                Delete</button>
            </div>
        );
    };

    getBadgeClassNames() {
        let classes = "badge m-2 ";
        classes += this.props.obj.value === 0 ?
            "badge-warning"
            : "badge-primary";
        return classes;
    }

    formatValue() {
        let {value} = this.props.obj;
        return value === 0 ? 'Zero' : value;
    };
}

export default Counter;
