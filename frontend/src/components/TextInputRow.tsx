import { Grid, TextField, Typography } from "@mui/material";

export type TextInputRowProps = {
  name: string,
  labelText: string,
  placeholderText: string,
  isTextField: boolean,
  isHalf: boolean,
  required: boolean,
  value: string,
  onValueChange: (value: string) => void,
}

const TextInputRow: React.FC<TextInputRowProps> = (props: TextInputRowProps) => {
  const size = props.isHalf ? 6 : 12;
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
          {
            props.isTextField ? 
            <TextField
            defaultValue={props.value}
            required={props.required}
            id={props.name}
            name={props.name}
            fullWidth
            label={props.placeholderText}
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => props.onValueChange(e.target.value)}
          /> : 
          <TextField
          defaultValue={props.value}
            required={props.required}
            multiline
            rows={5}
            maxRows={10}
            id={props.name}
            name={props.name}
            fullWidth
            label={props.placeholderText}
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => props.onValueChange(e.target.value)}
          />
          }
          
        </Grid>
  );
};

export default TextInputRow;