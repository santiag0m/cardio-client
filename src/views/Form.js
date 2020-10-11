import React, { useState, useCallback } from "react";

import Field from "../components/Field.js";
import { Button, FormControl, FormGroup, makeStyles } from "@material-ui/core";

function requestUpdate(field_name, value, formRequest, setRequest) {
  if ((value !== undefined) & (value !== null) & (value !== "")) {
    let newRequest = { ...formRequest };
    newRequest[field_name] = value;
    setRequest(newRequest);
    console.log(newRequest);
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    margin: "0 0 128px 0",
  },
  formControl: {
    margin: theme.spacing(3),
    display: "flex",
  },
  checkboxGroup: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignSelf: "center",
    margin: "32px 0 0 0",
  },
  numbersGroup: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignSelf: "center",
    margin: "32px 0 0 0",
  },
  number: {
    margin: "6px",
  },
  categoryGroup: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignSelf: "center",
    margin: "32px 0 0 0",
  },
  category: {
    margin: "12px",
  },
  submitButton: {
    alignSelf: "center",
    width: "50%",
  },
}));

export default function Form() {
  const classes = useStyles();
  const [formRequest, setFormRequest] = useState({});

  let handleSubmit = () => {
    alert(JSON.stringify(formRequest));
  };

  const formUpdate = useCallback(
    (field_name, value) => {
      requestUpdate(field_name, value, formRequest, setFormRequest);
    },
    [formRequest, setFormRequest]
  );

  let fields = [
    <FormGroup key="demo-numbers" className={classes.numbersGroup}>
      <Field
        key="Age"
        field_name="Age"
        type="number"
        formUpdate={formUpdate}
        className={classes.number}
      />
      <Field
        key="BMI"
        field_name="BMI"
        type="number"
        formUpdate={formUpdate}
        className={classes.number}
      />
      <Field
        key="Coronary Arteries Blocked"
        field_name="Coronary Arteries Blocked"
        type="number"
        formUpdate={formUpdate}
        className={classes.number}
      />
    </FormGroup>,
    <FormGroup key="numbers" className={classes.numbersGroup}>
      <Field
        key="LVEF"
        field_name="LVEF"
        type="number"
        formUpdate={formUpdate}
        className={classes.number}
      />
      <Field
        key="Hematocrit"
        field_name="Hematocrit"
        type="number"
        formUpdate={formUpdate}
        className={classes.number}
      />
      <Field
        key="Creatinine"
        field_name="Creatinine"
        type="number"
        formUpdate={formUpdate}
        className={classes.number}
      />
    </FormGroup>,
    <FormGroup key="checkboxes" className={classes.checkboxGroup}>
      <Field
        key="Hypertension"
        field_name="Hypertension"
        type="checkbox"
        formUpdate={formUpdate}
      />
      <Field
        key="Diabetes"
        field_name="Diabetes"
        type="checkbox"
        formUpdate={formUpdate}
      />
      <Field
        key="Peripheral Artery Disease"
        field_name="Peripheral Artery Disease"
        type="checkbox"
        formUpdate={formUpdate}
      />
      <Field
        key="Stroke"
        field_name="Stroke"
        type="checkbox"
        formUpdate={formUpdate}
      />
      <Field
        key="Heart Failure"
        field_name="Heart Failure"
        type="checkbox"
        formUpdate={formUpdate}
      />
      <Field
        key="Arrhythmia"
        field_name="Arrhythmia"
        type="checkbox"
        formUpdate={formUpdate}
      />
    </FormGroup>,
    <FormGroup key="urgent-checkboxes" className={classes.checkboxGroup}>
      <Field
        key="Dialysis"
        field_name="Dialysis"
        type="checkbox"
        formUpdate={formUpdate}
      />
      <Field
        key="Endocarditis"
        field_name="Endocarditis"
        type="checkbox"
        formUpdate={formUpdate}
      />
      <Field
        key="Reanimation"
        field_name="Reanimation"
        type="checkbox"
        formUpdate={formUpdate}
      />
      <Field
        key="Cardiogenic Shock"
        field_name="Cardiogenic Shock"
        type="checkbox"
        formUpdate={formUpdate}
      />
    </FormGroup>,
    <FormGroup key="categories" className={classes.categoryGroup}>
      <Field
        key="Sex"
        field_name="Sex"
        type="category"
        options={["Female", "Male"]}
        formUpdate={formUpdate}
        className={classes.category}
      />
      <Field
        key="COPD"
        field_name="COPD"
        type="category"
        options={["No", "Mild", "Moderate", "Severe"]}
        formUpdate={formUpdate}
        className={classes.category}
      />
      <Field
        key="Urgency upon admission"
        field_name="Urgency upon admission"
        type="category"
        options={["Elective", "Urgent", "Emergency", "Emergency - Rescue"]}
        formUpdate={formUpdate}
        className={classes.category}
      />
      <Field
        key="Weight of procedure"
        field_name="Weight of procedure"
        type="category"
        options={[
          "Isolated CABG",
          "Isolated non-CABG",
          "Two procedures",
          "Three or more procedures",
        ]}
        formUpdate={formUpdate}
        className={classes.category}
      />
    </FormGroup>,
    <FormGroup key="insufficiency-categories" className={classes.categoryGroup}>
      <Field
        key="Aortic valve insufficiency"
        field_name="Aortic valve insufficiency"
        type="category"
        options={["No", "Trivial", "Mild", "Moderate", "Severe"]}
        formUpdate={formUpdate}
        className={classes.category}
      />
      <Field
        key="Mitral valve insufficiency"
        field_name="Mitral valve insufficiency"
        type="category"
        options={["No", "Trivial", "Mild", "Moderate", "Severe"]}
        formUpdate={formUpdate}
        className={classes.category}
      />
      <Field
        key="Tricuspid valve insufficiency"
        field_name="Tricuspid valve insufficiency"
        type="category"
        options={["No", "Trivial", "Mild", "Moderate", "Severe"]}
        formUpdate={formUpdate}
        className={classes.category}
      />
    </FormGroup>,
  ];
  return (
    <div className={classes.root}>
      <h1>Cardiac Surgery Mortality Risk Calculator</h1>
      <FormControl className={classes.formControl}>{fields}</FormControl>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleSubmit}
        className={classes.submitButton}
      >
        submit
      </Button>
    </div>
  );
}
