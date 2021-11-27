import { Switch } from '@douyinfe/semi-ui';

export default () => {
  return (
    <>
      <div>
        <Switch checkedText="开" uncheckedText="关" />
        <Switch checkedText="｜" uncheckedText="〇" style={{ marginLeft: 5 }} />
        <br />
        <br />
        <Switch defaultChecked checkedText="开" uncheckedText="关" />
        <Switch
          defaultChecked
          checkedText="｜"
          uncheckedText="〇"
          style={{ marginLeft: 5 }}
        />
        <br />
        <br />
        <Switch checkedText="開" uncheckedText="關" size="large" />
        <Switch
          checkedText="｜"
          uncheckedText="〇"
          size="large"
          style={{ marginLeft: 5 }}
        />
        <br />
        <br />
        <Switch
          defaultChecked
          checkedText="开"
          uncheckedText="关"
          size="large"
        />
        <Switch
          defaultChecked
          checkedText="｜"
          uncheckedText="〇"
          size="large"
          style={{ marginLeft: 5 }}
        />
      </div>

      <div>
        <Switch disabled></Switch>
        <br />
        <Switch disabled checked={true}></Switch>
      </div>

      <div>
        <Switch size="small"></Switch>
        <Switch defaultChecked={true} size="small"></Switch>
        <Switch size="small" loading />
        <Switch size="small" loading defaultChecked={true} />
        <br />
        <br />
        <Switch></Switch>
        <Switch defaultChecked={true}></Switch>
        <Switch loading />
        <Switch loading defaultChecked={true} />
        <br />
        <br />
        <Switch size="large"></Switch>
        <Switch defaultChecked={true} size="large"></Switch>
        <Switch size="large" loading />
        <Switch size="large" loading defaultChecked={true} />
      </div>

      <div>
        <Switch onChange={(v, e) => console.log(v)}></Switch>
        <br />
        <Switch
          defaultChecked={true}
          onChange={(v, e) => console.log(v)}></Switch>
      </div>
    </>
  );
};
