import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import Timeline from './Timeline.jsx';

const propTypes = {
  contentId: PropTypes.number.isRequired,
};

const ContentManager = ({ contentId }) => {
  let content;
  switch (contentId) {
    case 0:
      content = (<p>About Me</p>);
      break;
    case 1:
      content = (<p>Interests</p>);
      break;
    case 2:
      content = (<p>Projects</p>);
      break;
    case 3:
      content = (<p>Resume</p>);
      break;
    case 4:
      content = (<Timeline />);
      break;
    default:
      content = (<p>This is default</p>);
      break;
  }
  return (
    <Container component="div" maxWidth={false}>
      <div className="contentDiv">
        {content}
      </div>
    </Container>
  );
};

ContentManager.propTypes = propTypes;

export default ContentManager;
