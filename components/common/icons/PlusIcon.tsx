import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

const PlusIcon = ({ ...props }: SvgIconProps & {}) => {
  return (
    <SvgIcon viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M9.1665 10.8333H4.1665V9.16667H9.1665V4.16667H10.8332V9.16667H15.8332V10.8333H10.8332V15.8333H9.1665V10.8333Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default PlusIcon;
