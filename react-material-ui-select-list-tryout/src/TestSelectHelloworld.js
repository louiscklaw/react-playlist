import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputBase from '@material-ui/core/InputBase'
import FormHelperText from '@material-ui/core/FormHelperText'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

const STATUS_HIDE_FROM_MENU = '3'
const STATUS_AVAILABLE = '2'
const STATUS_SOLD_OUT = '1'
const STATUS_IN_STOCK = '0'

const BootstrapInput = withStyles(theme => ({
  border: '1px solid #e2e2e2',
  borderRadius: '3px',
}))(InputBase)

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },

  root: {
    marginTop: '10px',
    border: '1px solid #e2e2e2',
    borderRadius: '3px',
    padding: '10px 26px 10px 12px',
  },
  selectLabel: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '17px',
  },
  icon: {
    color: '#707070',
    marginRight: '1rem',
    marginTop: '10px',
  },
}))

export default function TestSelectHelloworld() {
  const classes = useStyles()
  const [age, setAge] = React.useState(STATUS_IN_STOCK)
  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <>
      <div style={{ width: '330px' }}>
        <FormControl className={classes.margin} style={{ width: '100%' }}>
          <div>販売状況 (STATUS)</div>
          <Select
            classes={{
              root: classes.root,
              icon: classes.icon,
            }}
            value={age}
            onChange={handleChange}
            input={<BootstrapInput />}
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={STATUS_HIDE_FROM_MENU}>未公開(hide from menu)</MenuItem>
            <MenuItem value={STATUS_AVAILABLE}>利用可能(available)</MenuItem>
            <MenuItem value={STATUS_IN_STOCK}>在庫あり(in_stock)</MenuItem>
            <MenuItem value={STATUS_SOLD_OUT}>完売(sold_out)</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  )
}
