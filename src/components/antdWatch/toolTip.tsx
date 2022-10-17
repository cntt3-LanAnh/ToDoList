import { Button, Tooltip } from 'antd';
import React from 'react';

export const App: React.FC = () => (
  <>
    <Tooltip placement="topLeft" title="Prompt Text">
      <Button>Align edge </Button>
    </Tooltip>
    <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
      <Button>Arrow points to center </Button>
    </Tooltip>
  </>
);
