import React from 'react';
import moment from 'moment'
import {get} from 'lodash'

import { TextField } from '@material-ui/core'

const DatePicker = (props) => {
  const { classes, onChange } = props;

  return (
    <form className={get(classes, 'container')} noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        onChange={onChange}
          defaultValue={moment().format('yyyy-MM-DD')}
        className={get(classes, 'textField')}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}


export default DatePicker;
