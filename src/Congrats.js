import React from "react";
import PropTypes from "prop-types";
/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props -React props.
 * @return {JSX.Element} - Rendered component (or null if success prop is)
 */
const Congrats = props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations, you guessed the word!
        </span>
      </div>
    );
  }
  return <div data-test="component-congrats" />;
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};
export default Congrats;
