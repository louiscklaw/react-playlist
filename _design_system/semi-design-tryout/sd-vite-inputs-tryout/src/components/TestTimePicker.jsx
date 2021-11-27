import React, { useState } from 'react';
import { TimePicker, Button } from '@douyinfe/semi-ui';

function Demo() {
  const [open, setOpen] = useState(false);
  const closePanel = () => setOpen(false);
  const onOpenChange = (open) => {
    setOpen(open);
    console.log(open);
  };

  return (
    <TimePicker
      open={open}
      onOpenChange={onOpenChange}
      panelHeader={'Time Select'}
      panelFooter={<Button onClick={closePanel}>close</Button>}
    />
  );
}

export default () => {
  return (
    <>
      <div>
        <TimePicker type="timeRange" defaultValue={['10:23:15', '12:38:32']} />
        <br />
        <br />
        <TimePicker
          type="timeRange"
          use12Hours
          format="a h:mm"
          defaultValue={['上午 08:11', '下午 11:21']}
        />
      </div>

      <div>
        <TimePicker use12Hours />
        <br />
        <br />
        <TimePicker use12Hours format="a h:mm" />
      </div>
      <Demo />
      <>
        <TimePicker format={'HH:mm'} defaultValue={'10:24'} />
      </>
      <TimePicker insetLabel="时刻" />
    </>
  );
};
