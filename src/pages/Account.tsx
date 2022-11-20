import { useState, SyntheticEvent } from 'react';
import Login from '../views/Login';
import SignIn from '../views/SignIn';
import { Stack, Tab, Tabs, Box } from '@mui/material';
import TabPanelProps from '../interfaces/TabPanelProps';

const Account = () => {
  const TabPanel = (props: TabPanelProps) => {
    const { children, index, value, ...other } = props;
    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && <Box>{children}</Box>}
      </div>
    );
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab=${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const [tab, setTab] = useState(0);

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Stack sx={{ width: 'max-content', margin: '0 auto' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          aria-label='Login or Sign In'>
          <Tab label='Login' {...a11yProps(0)} />
          <Tab label='Sign In' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
        <Login />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <SignIn />
      </TabPanel>
    </Stack>
  );
};

export default Account;
