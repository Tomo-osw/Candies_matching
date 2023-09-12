import { Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export type DatePickerProps = {
  onValueChange: (value: string) => void,
  value: string,
}

const DatePicker: React.FC<DatePickerProps> = (props: DatePickerProps) => {
  const [pickedDateStr, setPickedDateStr] = useState("");
  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    setPickedDateStr(`${year}-${month}-${date}`);
  },[])
  return(
    <Grid item xs={6} md={6}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography sx={{marginRight: '16px'}}>開始日</Typography>
      <Typography sx={{marginRight: '8px'}}>{pickedDateStr}</Typography>
      <input type="date" value={props.value} onChange={(e) => {
        setPickedDateStr(e.target.value);
        props.onValueChange(e.target.value);
      }}/>
    </Grid>
  );
};

export default DatePicker;