/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faDiscord,
  faSnapchat,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import discordSocial from '../../media/discordSocial.jpg';
import snapchatSocial from '../../media/snapchatSocial.jpg';

// eslint-disable-next-line react/display-name
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const SocialMedia = () => {
  const [open, setOpen] = React.useState(false);
  const [discordDialogOpen, setDiscordDialogOpen] = React.useState(false);

  const handleSnapchatClickOpen = () => {
    setOpen(true);
  };

  const handleDiscordClickOpen = () => {
    setDiscordDialogOpen(true);
  };

  const handleSnapchatClose = () => {
    setOpen(false);
  };

  const handleDiscordClose = () => {
    setDiscordDialogOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleSnapchatClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Add me on snap! Scan the Snapchat QR Code below!
        </DialogTitle>
        <DialogContent>
            <img src={snapchatSocial} alt="Snapchat Social" id="snapchatSocialImg" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSnapchatClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={discordDialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDiscordClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Add me on Discord!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <img src={discordSocial} alt="Discord Social" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDiscordClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div className="social-container">
        <a href="https://www.instagram.com/my_name_yang/" className='socialIcon' id="instagramSocial" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="4x" />
        </a>
        <a href="https://www.linkedin.com/in/michael-yangmi/" className='socialIcon' id="linkedInSocial" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="4x" />
        </a>
        <div className='socialIcon' id="discordSocial" onClick={handleDiscordClickOpen}>
          <FontAwesomeIcon icon={faDiscord} size="4x" />
        </div>
        <a href="https://github.com/myangmi" className='socialIcon' id="githubSocial" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="4x" />
        </a>
        <div className='socialIcon' id="snapchatSocial" onClick={handleSnapchatClickOpen}>
          <FontAwesomeIcon icon={faSnapchat} size="4x" />
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
