import React from 'react';
import { Button } from '@douyinfe/semi-ui';
import { Checkbox } from '@douyinfe/semi-ui';
import { DatePicker } from '@douyinfe/semi-ui';
import { Input, Typography } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';
import { TextArea } from '@douyinfe/semi-ui';
import { InputNumber } from '@douyinfe/semi-ui';
import { RadioGroup, Radio, Space } from '@douyinfe/semi-ui';

export default () => {
  let [is_mobile, setIsMobile] = React.useState(false);
  let [is_pad, setIsPad] = React.useState(false);
  let [is_desktop, setIsDesktop] = React.useState(false);

  let [debug, setDebug] = React.useState();

  const onbreakpoint = (screen, is_md) => {
    switch (screen) {
      case 'xs':
        setIsMobile(true);
        setIsPad(false);
        setIsDesktop(false);
        break;

      case 'sm':
        setIsMobile(true);
        setIsPad(false);
        setIsDesktop(false);
        break;

      case 'md':
        setIsMobile(false);
        setIsPad(true);
        setIsDesktop(false);
        break;

      case 'lg':
        setIsMobile(false);
        setIsPad(true);
        setIsDesktop(false);
        break;

      case 'xl':
        setIsMobile(false);
        setIsPad(false);
        setIsDesktop(true);
        break;

      case 'xxl':
        setIsMobile(false);
        setIsPad(false);
        setIsDesktop(true);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <>
        <RadioGroup type="card" defaultValue={2} direction="vertical">
          <Radio
            value={1}
            disabled
            extra="Semi Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统"
            style={{ width: 280 }}>
            单选框标题
          </Radio>
          <Radio
            value={2}
            extra="Semi Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统"
            style={{ width: 280 }}>
            单选框标题
          </Radio>
          <Radio
            value={3}
            extra="Semi Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统"
            style={{ width: 280 }}>
            单选框标题
          </Radio>
        </RadioGroup>
      </>
      <>
        <Space vertical spacing="loose" align="start">
          <RadioGroup type="button" buttonSize="large" defaultValue={1}>
            <Radio value={1}>即时推送</Radio>
            <Radio value={2}>定时推送</Radio>
            <Radio value={3}>动态推送</Radio>
          </RadioGroup>
        </Space>
      </>

      <>
        <Radio extra="Semi Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统">
          Semi Design
        </Radio>
      </>
      <>
        <InputNumber innerButtons style={{ width: 190 }} />
      </>

      <div className="btn-margin-right">
        <Button>主要按钮</Button>
        <Button type="secondary">次要按钮</Button>
        <Button type="tertiary">第三按钮 aa123321</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮 aaa</Button>
      </div>
      <>
        <Button theme="solid" type="primary" style={{ marginRight: 8 }}>
          深色主要
        </Button>
        <Button theme="solid" type="secondary" style={{ marginRight: 8 }}>
          深色次要
        </Button>
        <Button theme="solid" type="tertiary" style={{ marginRight: 8 }}>
          深色第三
        </Button>
        <Button theme="solid" type="warning" style={{ marginRight: 8 }}>
          深色警告
        </Button>
        <Button theme="solid" type="danger" style={{ marginRight: 8 }}>
          深色危险
        </Button>
      </>

      <Checkbox defaultChecked onChange={(checked) => console.log(checked)}>
        Semi Design
      </Checkbox>
      <>
        <DatePicker type="dateTime" density="compact" />
        <br />
        <br />
        <DatePicker type="dateRange" density="compact" style={{ width: 260 }} />
      </>

      <>
        <Input placeholder="large" size="large"></Input>
        <Input placeholder="中文字測試"></Input>
        <Input placeholder="small" size="small"></Input>
      </>

      <>
        <Input prefix={<IconSearch />} showClear></Input>

        <br />
        <Input prefix="Prefix" showClear></Input>

        <br />
        <Input suffix={<IconSearch />} showClear></Input>

        <br />
        <Input
          suffix={
            <Typography.Text strong type="secondary" style={{ marginRight: 8 }}>
              Suffix
            </Typography.Text>
          }
          showClear></Input>
      </>
      <>
        <Input addonBefore="http://" addonAfter=".com" />
      </>
      <>
        <Input mode="password" defaultValue="123456"></Input>
      </>

      <div>
        <TextArea autosize rows={1} />
        <br />
        <br />
        <TextArea maxCount={100} showClear />
      </div>
    </>
  );
};
