import React from 'react';
import KingdomStats from './KingdomStats';
import PropTypes from 'prop-types';

class PlaceImage extends React.Component {
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
PlaceImage.propTypes = {
    statarray: PropTypes.array.isRequired
}

export default PlaceImage;