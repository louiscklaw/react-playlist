import React from 'react';
import { mount } from 'enzyme';

import Home from 'src/Home';

import { LangContextEn } from 'src/mocks/LangContextEn';

it('test render Home En', () => {
  const mounted = mount(
    <LangContextEn.Provider>
      <Home />
    </LangContextEn.Provider>
  );

  // console.log(mounted.debug());
  expect(mounted.contains(<h2>Home</h2>)).toBe(true);
});
