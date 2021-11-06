/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faXbox,
  faDiscord,
  faSnapchat,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

// eslint-disable-next-line react/display-name
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const SocialMedia = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Add me on snap! Scan the Snapchat QR Code below!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {/* TODO */}
            TODO
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
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
        <a href="https://account.xbox.com/en-us/profile?gamertag=Tai-myd" className='socialIcon' id="xboxSocial" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faXbox} size="4x" />
        </a>
        <a href="https://discord.gg/Mtq5zD8" className='socialIcon' id="discordSocial" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faDiscord} size="4x" />
        </a>
        <div className='socialIcon' id="snapchatSocial" onClick={handleClickOpen}>
          <FontAwesomeIcon icon={faSnapchat} size="4x" />
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
