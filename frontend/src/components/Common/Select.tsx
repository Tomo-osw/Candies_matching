import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type SelectProps = {
  inputId?: string;
  selectId?: string;
  selectLabelId?: string;
  value?: string;
  elements?: { value: string; content: string }[];
  label?: string;
  sx?: {};
  onChange?: (event: SelectChangeEvent) => void;
};

export const SelectBox = ({
  inputId = '',
  selectId = '',
  selectLabelId = '',
  value = '',
  elements = [],
  label = '',
  sx = {},
  onChange = () => {},
}: SelectProps) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120, ...sx }} size="small">
      <InputLabel id={inputId}>{label}</InputLabel>
      <Select
        labelId={selectLabelId}
        id={selectId}
        value={value}
        label={label}
        onChange={onChange}
      >
        {elements.map((el, index) => {
          return (
            <MenuItem key={index} value={el.value}>
              {el.content}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
