import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

const CloseIcon = ({ ...props }: SvgIconProps & {}) => {
  return (
    <SvgIcon viewBox="0 0 16 16" {...props}>
      <path
        d="M4.26659 12.6666L3.33325 11.7333L7.06659 7.99998L3.33325 4.26665L4.26659 3.33331L7.99992 7.06665L11.7333 3.33331L12.6666 4.26665L8.93325 7.99998L12.6666 11.7333L11.7333 12.6666L7.99992 8.93331L4.26659 12.6666Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default CloseIcon;
