import { Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

export type NumberInputRowProps = {
  name: string,
  labelText: string,
  placeholderText: string,
  // 数字を扱うコンポーネントなのにややこしいが、isTextFieldはあくまで複数行の入力かどうかを制御する
  isTextField: boolean,
  isHalf: boolean,
  value: number,
  onValueChange: (value: number) => void,
}

const NumberInputRow: React.FC<NumberInputRowProps> = (props: NumberInputRowProps) => {
  const size = props.isHalf ? 6 : 12;
  const [isError, setIsError] = useState(false);
  return(
    <Grid item xs={size} sm={size}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography sx={{
            marginRight: '16px',
            marginTop: '8px',
            width: '200px',
            textAlign: 'right',
          }}>
            {props.labelText}
          </Typography>
          {/* <p>{labelText}</p> */}
            <TextField
            error={isError}
            helperText="数字を入力してください"
            defaultValue={props.value}
            required
            id={props.name}
            name={props.name}
            fullWidth
            label={props.placeholderText}
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => {
              const input = e.target.value;
              if (Number.isNaN(Number(input))) {
                setIsError(true);
                return;
              }
              setIsError(false);
              props.onValueChange(Number(input));
            }}
          />
        </Grid>
  );
};

export default NumberInputRow;