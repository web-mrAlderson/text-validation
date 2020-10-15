import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({ text }) => (
    <p>
        {Array.isArray(text) ? text.map((elem, index) => { return <span key={index} >{elem.s[0]} </span> }) : text}
    </p>
);

Title.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
}

Title.defaultProps = {
    text: 'Correct Text',
}

export default Title;