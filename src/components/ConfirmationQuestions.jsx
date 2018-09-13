import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props) {
  return (
    <div>
      <style jsx>{`
          .question {
            text-align: center;
            color: white;
          }
      `}
      </style>
      <div className="question">
        <h3>Would you like to add a new keg?</h3>
        <button className="btn btn-success" onClick={props.onTroubleshootingConfirmation}>Sure Do!</button>
      </div>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
