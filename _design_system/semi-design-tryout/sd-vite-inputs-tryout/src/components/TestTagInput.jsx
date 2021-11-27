import React from 'react';

import { TagInput, Toast, Avatar } from '@douyinfe/semi-ui';
import { IconVigoLogo, IconGift } from '@douyinfe/semi-icons';

class CustomRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ['夏可漫'],
    };
    this.list = [
      {
        name: '夏可漫',
        avatar:
          'https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/avatarDemo.jpeg',
      },
      {
        name: '申悦',
        avatar:
          'https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/bf8647bffab13c38772c9ff94bf91a9d.jpg',
      },
      {
        name: '曲晨一',
        avatar:
          'https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/dbf7351bb779433d17c4f50478cf42f7.jpg',
      },
      {
        name: '文嘉茂',
        avatar:
          'https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/7abf810ff060ac3387bd027ead92c4e0.jpg',
      },
    ];
    this.mapList = new Map(this.list.map((item) => [item.name, item]));
  }

  renderTagItem(value, index) {
    const data = this.mapList.get(value);
    return (
      <div
        key={index}
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: 14,
          marginRight: 10,
        }}>
        <Avatar
          src={
            data
              ? data.avatar
              : 'https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/avatarDemo.jpeg'
          }
          size="extra-small"
        />
        <span style={{ marginLeft: 8 }}>{`${value}@semi.com`}</span>
      </div>
    );
  }

  render() {
    const { value } = this.state;
    return (
      <TagInput
        value={value}
        onChange={(value) => this.setState({ value })}
        renderTagItem={(value, index) => this.renderTagItem(value, index)}
      />
    );
  }
}

export default () => {
  return (
    <>
      <CustomRender />
      <TagInput
        maxTagCount={2}
        showRestTagsPopover={true}
        restTagsPopoverProps={{ position: 'top' }}
        defaultValue={['抖音', '火山', '西瓜视频']}
        onChange={(v) => console.log(v)}
      />
      <>
        <TagInput
          max={3}
          placeholder="最多输入3条标签.."
          onChange={(v) => console.log(v)}
          onExceed={(v) => {
            Toast.warning('超过 max');
            console.log(v);
          }}
        />
        <TagInput
          maxLength={5}
          placeholder="单个标签长度不超过5..."
          style={{ marginTop: 12 }}
          onChange={(v) => console.log(v)}
          onInputExceed={(v) => {
            Toast.warning('超过 maxLength');
            console.log(v);
          }}
        />
      </>

      <TagInput
        defaultValue={['抖音', '火山', '西瓜视频']}
        addOnBlur={true}
        placeholder="请输入..."
        onChange={(v) => console.log(v)}
      />
      <>
        <TagInput prefix={<IconVigoLogo />} />
        <br />
        <br />
        <TagInput prefix="Prefix" />
        <br />
        <br />
        <TagInput suffix={<IconGift />} />
        <br />
        <br />
        <TagInput suffix="Suffix" />
      </>
      <>
        <TagInput size="small" placeholder="small" />
        <br />
        <br />
        <TagInput placeholder="default" />
        <br />
        <br />
        <TagInput size="large" placeholder="large" />
      </>
      <TagInput
        showClear
        defaultValue={['抖音', '火山']}
        placeholder="批量删除..."
        onChange={(v) => console.log(v)}
      />
      <>
        <TagInput
          separator="-"
          placeholder="使用 - 进行批量输入"
          onChange={(v) => console.log(v)}
        />
        <br />
        <br />
        <TagInput
          separator={['-', '/', '|', '++']}
          placeholder="支持多个分隔符进行批量输入"
          onChange={(v) => console.log(v)}
        />
      </>
      <TagInput
        defaultValue={['抖音', '火山', '西瓜视频']}
        placeholder="请输入..."
        onChange={(v) => console.log(v)}
      />
    </>
  );
};
