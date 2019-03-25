import PropTypes from 'prop-types';
import React from 'react';

function MarkdownPostDetails({ title, date, timeToRead }) {
  return (
    <header className="MarkdownPostDetails">
      <h1 className="MarkdownPostDetails__title">{title}</h1>
      <small className="MarkdownPostDetails__date">
        {date} — {timeToRead}min
      </small>
    </header>
  );
}

MarkdownPostDetails.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  timeToRead: PropTypes.number.isRequired,
};

export default MarkdownPostDetails;
