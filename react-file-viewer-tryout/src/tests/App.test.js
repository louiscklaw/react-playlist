import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';
import { mount } from 'enzyme';

import renderer from 'react-test-renderer';

import { setup } from 'jest-dev-server';

const onError = () => {};

describe('file-viewer', () => {
  it('renders without crashing', () => {
    mount(<FileViewer fileType="fake" filePath="fake/path" />);
  });

  it('renders without crashing with visibility check disabled', () => {
    mount(
      <FileViewer fileType="fake" filePath="fake/path" disableVisibilityCheck />
    );
  });

  it('FileViewer sample usage, url', () => {
    const file = 'http://localhost/assets/demo.docx';
    const type = 'docx';

    const tree = renderer
      .create(
        <FileViewer
          fileType={type}
          filePath={file}
          errorComponent={CustomErrorComponent}
          onError={onError}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
