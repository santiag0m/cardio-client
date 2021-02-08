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
    <FormControl style={{width: '100%', border: '1px solid gray'}}>
      <FormLabel component="legend">{field_name}</FormLabel>
      <List style={{width: '100%'}}>
        {Object.entries(options).map(entry => {
          let [text, value] = entry
          return (
            <ListItem
              button
              selected={value === fieldValue}
              onClick={() => setFieldValue(value)}
              style={{width: '100%'}}
            >
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </FormControl>
  );
}
