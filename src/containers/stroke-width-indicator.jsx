import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import bindAll from 'lodash.bindall';
import {changeStrokeWidth} from '../reducers/stroke-width';
import StrokeWidthIndicatorComponent from '../components/stroke-width-indicator.jsx';
import {applyStrokeWidthToSelection} from '../helper/style-path';

class StrokeWidthIndicator extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleChangeStrokeWidth'
        ]);
    }
    handleChangeStrokeWidth (newWidth) {
        applyStrokeWidthToSelection(newWidth, this.props.onUpdateSvg);
        this.props.onChangeStrokeWidth(newWidth);
    }
    render () {
        return (
            <StrokeWidthIndicatorComponent
                strokeWidth={this.props.strokeWidth}
                onChangeStrokeWidth={this.handleChangeStrokeWidth}
            />
        );
    }
}

const mapStateToProps = state => ({
    strokeWidth: state.scratchPaint.color.strokeWidth
});
const mapDispatchToProps = dispatch => ({
    onChangeStrokeWidth: strokeWidth => {
        dispatch(changeStrokeWidth(strokeWidth));
    }
});

StrokeWidthIndicator.propTypes = {
    onChangeStrokeWidth: PropTypes.func.isRequired,
    onUpdateSvg: PropTypes.func.isRequired,
    strokeWidth: PropTypes.number
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StrokeWidthIndicator);
