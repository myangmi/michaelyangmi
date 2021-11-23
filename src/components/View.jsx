import React, { useState } from 'react';
import '../App.css';
import NavigationBar from './NavigationBar.jsx';
import SocialMedia from './socials/SocialMedia.jsx';
import ContentManager from './content/ContentManager.jsx';

const View = () => {
  const [contentId, setContentId] = useState(0);

  const navigationContentCallback = (navContentId) => {
    setContentId(navContentId);
  };
  return (
    <div className="view">
      <NavigationBar className="navigationBar" handleNavigation={navigationContentCallback} />
      <ContentManager className="contentManager" contentId={contentId} />
      {(contentId !== 4) ? <SocialMedia className="socialMedia" /> : null}
    </div>
  );
};

export default View;
