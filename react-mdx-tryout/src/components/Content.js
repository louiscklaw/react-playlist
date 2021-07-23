import React, { lazy } from 'react';

import 'src/App.css';

import { importMDX } from 'mdx.macro';

const MdxTestContent = lazy(() => importMDX('../mdxs/Content.mdx'));

export default function Helloworld() {
  return (
    <>
      <MdxTestContent />
    </>
  );
}
