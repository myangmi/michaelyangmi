import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import AboutMe from './aboutme/AboutMe.jsx';
import Interests from './interests/Interests.jsx';
import Timeline from './Timeline.jsx';

const propTypes = {
  contentId: PropTypes.number.isRequired,
};

const ContentManager = ({ contentId }) => {
  let content;
  switch (contentId) {
    case 0:
      content = (<AboutMe />);
      break;
    case 1:
      content = (<Interests />);
      break;
    case 2:
      content = (<p>Currently Under Construction...</p>);
      break;
    case 3:
      content = (<p>Currently Under Construction...</p>);
      break;
    case 4:
      content = (<Timeline />);
      break;
    default:
      content = (<p>Currently Under Construction...</p>);
      break;
  }
  return (
    <Container component="div" maxWidth={false} disableGutters>
      <div className="contentDiv">
        {content}
      </div>
    </Container>
  );
};

ContentManager.propTypes = propTypes;

export default ContentManager;
