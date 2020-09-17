import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class KingdomStats extends Component {
    getStyle = () => {
        if(this.props.stats.title !== 'Unrest') {
            return {
                background: '#FFCC33',
                padding: '5px',
                borderBottom: '1px #9B1C31 dotted',
                textDecoration: this.props.stats.value <= 9 && this.props.stats.title === 'Build Points' ?
                'underline' : 'none'
            }
        } else {
            return {
                background: '#FFCC33',
                padding: '5px',
                borderBottom: '1px #9B1C31 dotted',
                textDecoration: this.props.stats.value >= 1 && this.props.stats.title === 'Unrest' ?
                'underline' : 'none'
            }
        }
    }

    render() {
        const { title, value, id } = this.props.stats;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input 
                        ref={this.props.inputRef}
                        type='text'
                        name="newvalue"
                        onChange={this.props.onChange1.bind(this, id)}
                        onKeyPress={this.props.onChange2}
                    /> 
                    {' '}
                    { title } = { value }
                </p>
            </div>
        )
    }
}

// PropTypes
KingdomStats.propTypes = {
    stats: PropTypes.object.isRequired
}

export default KingdomStats
