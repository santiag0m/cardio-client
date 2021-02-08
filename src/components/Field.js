import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
  FormLabel,
  Checkbox,
} from "@material-ui/core";

import ListSelectionField from "./ListSelectionField.js";

export default function Field({
  field_name,
  type,
  formUpdate,
  options,
  className,
}) {
  const [fieldValue, setFieldValue] = useState(null);
  let handleChange = (e) => {
    setFieldValue(e.target.value);
  };

  let handleCheckboxChange = (e) => {
    setFieldValue(e.target.checked);
  };

  useEffect(() => {
    formUpdate(field_name, fieldValue);
  }, [field_name, fieldValue]);
  let input_field;
  if (options === undefined) {
    if (type !== "checkbox") {
      input_field = (
        <FormControl>
          <TextField type={type} label={field_name} onChange={handleChange} />
        </FormControl>
      );
    } else {
      input_field = (
        <ListSelectionField
          field_name={field_name}
          options={{ Yes: "true", No: "false" }}
          formUpdate={formUpdate}
        />
      );
    }
  } else {
    input_field = (
      <FormControl key={field_name}>
        <FormLabel id="-label">{field_name}</FormLabel>

        <RadioGroup onChange={handleChange} value={fieldValue}>
          {options.map((option_value) => {
            return (
              <FormControlLabel
                value={option_value}
                control={<Radio />}
                label={option_value}
                key={option_value}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    );
  }
  return <div className={className}>{input_field}</div>;
}
