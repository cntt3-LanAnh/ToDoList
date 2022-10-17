import { DownloadOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="space-x-2">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <br />
      <Button type="link">Link</Button>
      <br />
      <Button type="primary" icon={<DownloadOutlined />} />
      <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
      <Button type="primary" shape="round" icon={<DownloadOutlined />} />
      <Button type="primary" shape="round" icon={<DownloadOutlined />}>
        Download
      </Button>
      <Button type="primary" icon={<DownloadOutlined />}>
        Download
      </Button>
      <br />
      <br />
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
      <Tooltip title="search">
        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="dashed" icon={<SearchOutlined />}>
        Search
      </Button>
      <Button icon={<SearchOutlined />} />
    </div>
  );
};
