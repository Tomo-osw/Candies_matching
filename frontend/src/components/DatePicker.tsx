import { Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export type DatePickerProps = {
  onValueChange: (value: string) => void,
  value: string,
}

const DatePicker: React.FC<DatePickerProps> = (props: DatePickerProps) => {
  const [pickedDateStr, setPickedDateStr] = useState("");
  useEffect(() => {
    console.log("props.value is " + props.value)
    if(props.value == "") {
      // 登録画面の時
      // うまく動いていないので、一旦コメントアウト
      // const now = new Date();
      // const year = now.getFullYear();
      // const month = now.getMonth() + 1;
      // const date = now.getDate();
      // setPickedDateStr(`${year}-${month}-${date}`);
    } else {
      // 更新画面の時
      setPickedDateStr(props.value);
    }
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
      <input type="date" defaultValue={props.value} onChange={(e) => {
        setPickedDateStr(e.target.value);
        props.onValueChange(e.target.value);
      }}/>
    </Grid>
  );
};

export default DatePicker;