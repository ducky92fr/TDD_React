import React from "react";

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
        <span data-test="congrats-message">Congratulations</span>
      </div>
    );
  }
  return <div data-test="component-congrats" />;
};

export default Congrats;
