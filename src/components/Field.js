import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
  FormLabel,
  Switch,
  Grid,
} from "@material-ui/core";

export default function Field({ field, formUpdate, className, useSpanish }) {
  const [fieldValue, setFieldValue] = useState(field.default);

  let legend = useSpanish ? field.spanish_name : field.field_name;

  let handleChange = (e) => {
    setFieldValue(e.target.value);
  };

  let handleCheckboxChange = (e) => {
    setFieldValue(e.target.checked);
  };

  useEffect(() => {
    formUpdate(field.field_name, fieldValue);
  }, [field, fieldValue]);

  let input_field;

  if (field.options === undefined) {
    if (field.type !== "checkbox") {
      input_field = (
        <FormControl style={{ width: "100%" }}>
          <TextField type={field.type} label={legend} onChange={handleChange} />
        </FormControl>
      );
    } else {
      input_field = (
        <FormControl
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormLabel component="legend">{legend}</FormLabel>
          <Grid
            component="label"
            container
            alignItems="center"
            justify="center"
            spacing={1}
            style={{ width: "150px" }}
          >
            <Grid item>No</Grid>
            <Grid item>
              <Switch
                checked={fieldValue}
                onChange={handleCheckboxChange}
                name="checkedC"
              />
            </Grid>
            <Grid item>{useSpanish ? "Si" : "Yes"}</Grid>
          </Grid>
        </FormControl>
      );
    }
  } else {
    input_field = (
      <FormControl
        key={field.field_name}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <FormLabel id="-label">{legend}</FormLabel>

        <RadioGroup
          onChange={handleChange}
          value={fieldValue}
          style={{ display: "flex", flexDirection: "row", maxWidth: "50%" }}
        >
          {field.options.map((option_value, i) => {
            return (
              <FormControlLabel
                value={option_value}
                control={<Radio />}
                label={useSpanish ? field.spanish_options[i] : option_value}
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
