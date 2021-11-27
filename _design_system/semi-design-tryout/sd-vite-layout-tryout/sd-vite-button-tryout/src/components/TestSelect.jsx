import { Select, Avatar, Tag } from '@douyinfe/semi-ui';

export default () => {
  return (
    <>
      <>
        <Select placeholder="" style={{ width: 180 }} filter>
          <Select.OptGroup label="Asia">
            <Select.Option value="a-1">China</Select.Option>
            <Select.Option value="a-2">Koera</Select.Option>
          </Select.OptGroup>
          <Select.OptGroup label="Europe">
            <Select.Option value="b-1">Germany</Select.Option>
            <Select.Option value="b-2">France</Select.Option>
          </Select.OptGroup>
          <Select.OptGroup label="South America">
            <Select.Option value="c-1">Peru</Select.Option>
          </Select.OptGroup>
        </Select>
      </>

      <>
        <Select
          multiple
          style={{ width: '320px' }}
          defaultValue={['abc', 'hotsoon']}>
          <Select.Option value="abc">抖音</Select.Option>
          <Select.Option value="hotsoon">火山</Select.Option>
          <Select.Option value="jianying">剪映</Select.Option>
          <Select.Option value="xigua">西瓜视频</Select.Option>
        </Select>
        <br />
        <br />
        <Select
          multiple
          style={{ width: '320px' }}
          defaultValue={['abc', 'hotsoon', 'jianying']}
          maxTagCount={2}>
          <Select.Option value="abc">抖音</Select.Option>
          <Select.Option value="hotsoon">火山</Select.Option>
          <Select.Option value="jianying">剪映</Select.Option>
          <Select.Option value="xigua">西瓜视频</Select.Option>
        </Select>

        <br />
        <br />
        <Select
          multiple
          style={{ width: '320px' }}
          defaultValue={['abc']}
          max={2}
          onExceed={() => Toast.warning('最多只允许选择两项')}>
          <Select.Option value="abc">抖音</Select.Option>
          <Select.Option value="hotsoon">火山</Select.Option>
          <Select.Option value="jianying">剪映</Select.Option>
          <Select.Option value="xigua">西瓜视频</Select.Option>
        </Select>
      </>

      <>
        <Select defaultValue="abc" style={{ width: 120 }}>
          <Select.Option value="abc">抖音</Select.Option>
          <Select.Option value="hotsoon">火山</Select.Option>
          <Select.Option value="jianying" disabled>
            剪映
          </Select.Option>
          <Select.Option value="xigua">西瓜视频</Select.Option>
        </Select>
        <br />
        <br />
        <Select defaultValue="abc" disabled style={{ width: 120 }}>
          <Select.Option value="abc">抖音</Select.Option>
          <Select.Option value="hotsoon">火山</Select.Option>
        </Select>
        <br />
        <br />
        <Select placeholder="请选择业务线" style={{ width: 120 }}>
          <Select.Option value="abc">抖音</Select.Option>
          <Select.Option value="hotsoon">火山</Select.Option>
          <Select.Option value="jianying" disabled>
            剪映
          </Select.Option>
          <Select.Option value="xigua">西瓜视频</Select.Option>
        </Select>
      </>
    </>
  );
};
