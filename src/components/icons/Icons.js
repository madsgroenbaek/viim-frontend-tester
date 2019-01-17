import React from "react";
import PropTypes from 'prop-types'
import Icons from "./sprite.svg"; // Path to your icons.svg

const IconTest = ({ name, color, size }) => (
  
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#systemicons/${name}`} />
    {/* <use xlinkHref={`${Icons}#${name}`} /> */}
  </svg>
);

IconTest.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number
};

export default IconTest;