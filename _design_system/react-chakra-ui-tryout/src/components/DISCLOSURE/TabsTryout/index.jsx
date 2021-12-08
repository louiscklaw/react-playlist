import React from 'react';
import { Box, Text, Link, VStack, Code, Grid, Image } from '@chakra-ui/react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  useTab,
  useStyles,
} from '@chakra-ui/react';

import { chakra } from '@chakra-ui/react';

export function Usage() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
export function TabVariantsAndColor() {
  return (
    <>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
export function TabVariantsAndColor1() {
  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
export function TabSizes() {
  return (
    <>
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
export function ChangingTheTabsAlignment() {
  return (
    <>
      <Tabs align="end" variant="enclosed">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
export function FittedTabs() {
  return (
    <>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
export function StylingTheTabStatesViaProps() {
  return (
    <>
      <Tabs variant="unstyled">
        <TabList>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Tab 1</Tab>
          <Tab _selected={{ color: 'white', bg: 'green.400' }}>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
export function TestTabsonChange() {
  const colors = useColorModeValue(
    ['red.50', 'teal.50', 'blue.50'],
    ['red.900', 'teal.900', 'blue.900']
  );
  const [tabIndex, setTabIndex] = React.useState(0);
  const bg = colors[tabIndex];
  return (
    <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
      <TabList>
        <Tab>Red</Tab>
        <Tab>Teal</Tab>
        <Tab>Blue</Tab>
      </TabList>
      <TabPanels p="2rem">
        <TabPanel>The Primary Colors</TabPanel>
        <TabPanel>Are 1, 2, 3</TabPanel>
        <TabPanel>Red, yellow and blue.</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
export function MakeATabInitiallyActive() {
  return (
    <>
      <Tabs defaultIndex={1}>
        <TabPanels>
          <TabPanel>
            <Image
              boxSize="200px"
              fit="cover"
              src="https://resizing.flixster.com/wTgvsiM8vNLhCcCH-6ovV8n5z5U=/300x300/v1.bjsyMDkxMzI5O2o7MTgyMDQ7MTIwMDsxMjAwOzkwMA"
            />
          </TabPanel>
          <TabPanel>
            <Image
              boxSize="200px"
              fit="cover"
              src="https://vignette.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest?cb=20170716092103"
            />
          </TabPanel>
        </TabPanels>
        <TabList>
          <Tab>Naruto</Tab>
          <Tab>Sasuke</Tab>
        </TabList>
      </Tabs>
    </>
  );
}
export function MakeATabDisabled() {
  return (
    <>
      {' '}
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab isDisabled>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>1</TabPanel>
          <TabPanel>2</TabPanel>
          <TabPanel>3</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
export function TabsWithManualActivation() {
  return (
    <>
      <Tabs isManual variant="enclosed">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
export function LazilyMountingTabPanels() {
  return (
    <>
      <Tabs isLazy>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          {/* initially mounted */}
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
export function ControlledTabs() {
  const [tabIndex, setTabIndex] = React.useState(0);
  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
  return (
    <Box>
      <input
        type="range"
        min="0"
        max="2"
        value={tabIndex}
        onChange={handleSliderChange}
      />

      <Tabs index={tabIndex} onChange={handleTabsChange}>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Click the tabs or pull the slider around</p>
          </TabPanel>
          <TabPanel>
            <p>Yeah yeah. What's up?</p>
          </TabPanel>
          <TabPanel>
            <p>Oh, hello there.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export function DataTabs() {
  // 1. Create the component
  function DataTabs({ data }) {
    return (
      <Tabs>
        <TabList>
          {data.map((tab, index) => (
            <Tab key={index}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab, index) => (
            <TabPanel p={4} key={index}>
              {tab.content}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  }

  // 2. Create an array of data
  const tabData = [
    {
      label: 'Nigerian Jollof',
      content: 'Perhaps the greatest dish ever invented.',
    },
    {
      label: 'Pounded Yam & Egusi',
      content:
        'Perhaps the surest dish ever invented but fills the stomach more than rice.',
    },
  ];

  // 3. Pass the props and chill!
  return <DataTabs data={tabData} />;
}
export function TestHelloworld16() {
  return <>TestHelloworld16</>;
}
export function TestHelloworld17() {
  return <>TestHelloworld17</>;
}
export function TestHelloworld18() {
  return <>TestHelloworld18</>;
}
export function TestHelloworld19() {
  return <>TestHelloworld19</>;
}
export function TestHelloworld20() {
  return <>TestHelloworld20</>;
}

export function TabsTryout() {
  return (
    <div>
      TabsTryout
      <div>
        Usage <Usage />
      </div>
      <div>
        TabVariantsAndColor <TabVariantsAndColor />
      </div>
      <div>
        TabVariantsAndColor1 <TabVariantsAndColor1 />
      </div>
      <div>
        TabSizes <TabSizes />
      </div>
      <div>
        ChangingTheTabsAlignment <ChangingTheTabsAlignment />
      </div>
      <div>
        FittedTabs <FittedTabs />
      </div>
      <div>
        StylingTheTabStatesViaProps <StylingTheTabStatesViaProps />
      </div>
      <div>
        TestTabsonChange <TestTabsonChange />
      </div>
      <div>
        MakeATabInitiallyActive <MakeATabInitiallyActive />
      </div>
      <div>
        MakeATabDisabled <MakeATabDisabled />
      </div>
      <div>
        TabsWithManualActivation <TabsWithManualActivation />
      </div>
      <div>
        LazilyMountingTabPanels <LazilyMountingTabPanels />
      </div>
      <div>
        ControlledTabs <ControlledTabs />
      </div>
      <div>
        CreatingCustomTabComponents blocked by forwardRef
        {/*  <CreatingCustomTabComponents /> */}
      </div>
      <div>
        DataTabs <DataTabs />
      </div>
      <div>
        TestHelloworld16 <TestHelloworld16 />
      </div>
      <div>
        TestHelloworld17 <TestHelloworld17 />
      </div>
      <div>
        TestHelloworld18 <TestHelloworld18 />
      </div>
      <div>
        TestHelloworld19 <TestHelloworld19 />
      </div>
      <div>
        TestHelloworld20 <TestHelloworld20 />
      </div>
    </div>
  );
}
