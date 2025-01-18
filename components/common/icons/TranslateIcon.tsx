import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

const TranslateIcon = ({ ...props }: SvgIconProps & {}) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M6.65375 19.9902L2 15.3365L6.65375 10.6828L7.70775 11.752L4.873 14.5865H12.1537V16.0865H4.873L7.70775 18.9212L6.65375 19.9902ZM16.3462 14.3078L15.2923 13.2385L18.127 10.4038H10.8463V8.904H18.127L15.2923 6.06925L16.3462 5L21 9.65375L16.3462 14.3078Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default TranslateIcon;
