import React from 'react';
import { mount } from 'enzyme';

import Home from 'src/Home';

import { LangContextZh } from 'src/mocks/LangContextZh';

it('test render Home Zh', () => {
  const mounted = mount(
    <LangContextZh.Provider>
      <Home />
    </LangContextZh.Provider>
  );

  // console.log(mounted.debug());
  expect(mounted.contains(<h2>家</h2>)).toBe(true);
});
