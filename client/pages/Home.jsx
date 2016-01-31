import Radium from 'radium';
import React from 'react';
import { connect } from 'react-redux';

@Radium
class Home extends React.Component {
    /**
     * React property types
     * @type {Object}
     * @readonly
     */
    static propTypes = {
        dispatch: React.PropTypes.func.isRequired,
        phase: React.PropTypes.string.isRequired
    };

    /**
     * Render the component
     * @returns {JSX.Element} the rendered component
     * @overrides React.Component#render
     */
    render() {
        return <h1>{'Home'}</h1>;
    }
}

/*
** Link the Chrome component to the Redux store
*/
export default connect(
    (state) => {
        return {
            phase: state.phase
        };
    })(Home);