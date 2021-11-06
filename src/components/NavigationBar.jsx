/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const a11yProps = (index) => ({
  id: `scrollable-auto-tab-${index}`,
  'aria-controls': `scrollable-auto-tabpanel-${index}`,
});

const propTypes = {
  handleNavigation: PropTypes.func.isRequired,
};

const NavigationBar = ({ handleNavigation }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleNavigation(newValue);
  };

  return (
    <div className={'navigationBar'}>
      <AppBar position="sticky" color="default" sx={{ color: '#000000', opacity: '0.8' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          centered
        >
          <Tab label="About Me" {...a11yProps(0)} />
          <Tab label="Interests" {...a11yProps(1)} />
          <Tab label="Projects" {...a11yProps(2)} />
          <Tab label="Resume" {...a11yProps(3)} />
          <Tab label="My Life" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
    </div>
  );
};

NavigationBar.propTypes = propTypes;

export default NavigationBar;
