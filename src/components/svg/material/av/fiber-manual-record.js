import React from 'react';
import { pure } from 'recompose';
import SvgIcon from '../../SvgIcon';

let AvFiberManualRecord = props => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="8" />
  </SvgIcon>
);
AvFiberManualRecord = pure(AvFiberManualRecord);
AvFiberManualRecord.displayName = 'AvFiberManualRecord';
AvFiberManualRecord.muiName = 'SvgIcon';

export default AvFiberManualRecord;
