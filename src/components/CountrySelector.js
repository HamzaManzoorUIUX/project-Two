import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import { PowerOffSharp } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));
function CountrySelector(props) {
  const classes = useStyles();
  const handleChange = (event) => {
    props.queryState[1](event.target.value);
  };
    return (
        <div>
             <FormControl required className={classes.formControl}>
    <InputLabel htmlFor="age-native-required">{props.mylabel.replace(/_/g,' ')}</InputLabel>
        <Select
          native
          value={props.queryState[0]}
          onChange={handleChange}
          name={props.mylabel}
          inputProps={{
            id: 'age-native-required',
          }}
        >
          <option aria-label="None" value="" />
           {
            props.CountryValue.length>0?props.CountryValue.map((i,index)=>{
            return <option value={i.Country} key={index}>{i.Country}</option>
            }):<option value="null" >No Data</option>
            
          }
        </Select>
        {/* <FormHelperText>Required</FormHelperText> */}
      </FormControl>
    
        </div>
    );
}

export default CountrySelector;