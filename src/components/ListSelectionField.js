import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

export default function ListSelectionField({
  field_name,
  options,
  formUpdate,
}) {
  const [fieldValue, setFieldValue] = useState(null);

  useEffect(() => {
    console.log(field_name, fieldValue)
    formUpdate(field_name, fieldValue);
  }, [field_name, fieldValue]);

  return (
    <FormControl>
      <FormLabel component="legend">{field_name}</FormLabel>
      <List>
        {Object.entries(options).map((text, value) => {
          return (
            <ListItem
              button
              selected={value === fieldValue}
              onClick={() => setFieldValue(value)}
            >
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </FormControl>
  );
}
