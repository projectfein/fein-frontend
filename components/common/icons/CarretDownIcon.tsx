import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

const CarretDownIcon = ({ ...props }: SvgIconProps & {}) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M12.4999 14.6537L8.09619 10.25H16.9037L12.4999 14.6537Z" fill="currentColor" />
    </SvgIcon>
  );
};

export default CarretDownIcon;
