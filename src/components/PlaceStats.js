import React from 'react';
import KingdomStats from './KingdomStats';
import PropTypes from 'prop-types';

class PlaceStats extends React.Component {
    render() {
        return this.props.statarray.map((stats) => (
            <KingdomStats
                key={stats.id}
                stats={stats}
                onChange1={this.props.onChange1}
                onChange2={this.props.onChange2}
            />
        ));
    }
}

// PropTypes
PlaceStats.propTypes = {
    statarray: PropTypes.array.isRequired
}

export default PlaceStats;