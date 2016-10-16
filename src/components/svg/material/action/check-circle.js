import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let ActionCheckCircle = (props) => (
  <SvgIcon {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </SvgIcon>
);
ActionCheckCircle = pure(ActionCheckCircle);
ActionCheckCircle.displayName = 'ActionCheckCircle';
ActionCheckCircle.muiName = 'SvgIcon';

export default ActionCheckCircle;