import React, {Component} from 'react'
import './Button.css'

class Button extends Component {
    render() {
        const isOperator = value => {
            return !isNaN(value) || value === "." || value === "="
        }
        return(
            <div className={`button ${isOperator(this.props.children) ? null : "operator"}`} onClick={() => this.props.click(this.props.children)}>
                {this.props.children}
            </div>
        )
    }
}

export default Button