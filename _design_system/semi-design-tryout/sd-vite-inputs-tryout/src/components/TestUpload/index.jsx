import React from 'react';
import { Upload, Button } from '@douyinfe/semi-ui';
import { IconUpload } from '@douyinfe/semi-icons';

() => (
    <Upload action="//semi.design/api/upload">
        <Button icon={<IconUpload />} theme="light">
            Click upload
        </Button>
    </Upload>
);
