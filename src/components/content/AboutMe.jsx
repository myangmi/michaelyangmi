import React from 'react';
import {
  Grid, Paper, styled,
} from '@material-ui/core';
import headshot from '../../media/headshot.jpg';
import lanternPhoto from '../../media/lantern.PNG';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

const AboutMe = () => (
  <>
  <Grid className="aboutMe-content" container spacing={2} >
    <Grid item md={5}>
      <Item>
        <img src={headshot} alt='Personal Headshot Photo' className="aboutMe-profilePicture"/>
      </Item>
    </Grid>
    <Grid item md={7}>
      <Item>
        <h2> Michael Yangmi </h2>
        <p>
        I am a Software Engineer located in the Kansas City Area.
        <br/><br/>
        I graduated from Kansas State University with a B.S. in Computer Science and
        Johnson County Community College with an A.A.S in General Sciences.
        <br/><br/>
        Currently employed by Cerner where I have multiple years experience
        in web application and mobile development.
        I have worked on a multitude of corporate projects with as well personal ones.
        My interests outside of Software Engineering are
        Semi-Conductors, Investing, and Skateboarding.
        </p>
      </Item>
    </Grid>
  </Grid>
  <Grid className="aboutMe-content2" container spacing={2} >
    <Grid item md={7}>
      <Item>
        <h2> What is this website? </h2>
        <p>
        To put it simply, I wanted to learn how the AWS ecosystem works.
        This is a product of that curiosity. I used AWS route Route 53 to secure the domain name
        &apos;michaelyangmi.com&apos;.
        Elastic Beanstalk was used for deploying this react application.
        Finally, for Code Pipeline was used to automate my release process by using a Github
        webhook to pick up and deploy changes to my Master branch on the repo below.
        https://github.com/myangmi/michaelyangmi
        </p>
      </Item>
    </Grid>
    <Grid item md={5}>
      <Item>
        <img src={lanternPhoto} alt='Lantern Photo' className="aboutMe-lanternPicture" direction="column"/>
      </Item>
    </Grid>
  </Grid>
</>
);

export default AboutMe;
