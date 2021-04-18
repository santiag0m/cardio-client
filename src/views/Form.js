import React, { useState, useCallback } from "react";

import Field from "../components/Field.js";
import { Button, FormControl, FormGroup, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // width: "80%",
    alignItems: "center",
    margin: "0 0 128px 0",
  },
  formControl: {
    margin: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    // flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignSelf: "center",
    margin: "32px 0 0 0",
    // border: "1px solid red",
    width: "80%",
  },
  checkboxGroup: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    justifyContent: "center",
    margin: "32px 0 0 0",
    // border: "1px solid red",
  },
  checkbox: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    margin: "6px",
  },
  number: {
    margin: "6px",
  },
  category: {
    margin: "6px",
  },
  submitButton: {
    alignSelf: "center",
    width: "50%",
  },
}));

function updateRequest(field_name, value, formRequest, setFormRequest) {
  let newRequest = { ...formRequest };
  newRequest[field_name] = value;
  setFormRequest(newRequest);
  console.log(newRequest);
}

const calculatorFields = [
  {
    field_name: "Age",
    spanish_name: "Edad",
    type: "number",
    default: null,
    group: "demographics",
  },
  {
    field_name: "BMI",
    spanish_name: "IMC",
    type: "number",
    default: null,
    group: "demographics",
  },
  {
    field_name: "Coronary Arteries Blocked",
    spanish_name: "Vasos Coronarios Enfermos",
    type: "number",
    default: null,
    group: "demographics",
  },
  {
    field_name: "LVEF",
    spanish_name: "Fracción de Eyección",
    type: "number",
    default: null,
    group: "laboratory",
  },
  {
    field_name: "Hematocrit",
    spanish_name: "Hematocrito",
    type: "number",
    default: null,
    group: "laboratory",
  },
  {
    field_name: "Creatinine",
    spanish_name: "Creatinina",
    type: "number",
    default: null,
    group: "laboratory",
  },
  {
    field_name: "Hypertension",
    spanish_name: "Hipertensión",
    type: "checkbox",
    default: false,
    group: "comorbidities",
  },
  {
    field_name: "Diabetes",
    spanish_name: "Diabetes",
    type: "checkbox",
    default: false,
    group: "comorbidities",
  },
  {
    field_name: "Peripheral Artery Disease",
    spanish_name: "Enfermedad Arterial Periférica",
    type: "checkbox",
    default: false,
    group: "comorbidities",
  },
  {
    field_name: "Stroke",
    spanish_name: "Enfermedad Cerebro Vascular",
    type: "checkbox",
    default: false,
    group: "comorbidities",
  },
  {
    field_name: "Heart failure",
    spanish_name: "Insuficiencia Cardíaca",
    type: "checkbox",
    default: false,
    group: "comorbidities",
  },
  {
    field_name: "Arrhythmia",
    spanish_name: "Arritmia",
    type: "checkbox",
    default: false,
    group: "comorbidities",
  },
  {
    field_name: "Dialysis",
    spanish_name: "Diálisis",
    type: "checkbox",
    default: false,
    group: "comorbidities",
  },
  {
    field_name: "Endocarditis",
    spanish_name: "Endocarditis Infecciosa",
    type: "checkbox",
    default: false,
    group: "comorbidities",
  },
  {
    field_name: "Reanimation",
    spanish_name: "Resucitación",
    type: "checkbox",
    default: false,
    group: "procedure",
  },
  {
    field_name: "Cardiogenic Shock",
    spanish_name: "Schock Cardiogénico",
    type: "checkbox",
    default: false,
    group: "procedure",
  },
  {
    field_name: "Sex",
    spanish_name: "Sexo",
    type: "category",
    options: ["Female", "Male"],
    spanish_options: ["Femenino", "Masculino"],
    default: "",
    group: "demographics",
  },
  {
    field_name: "COPD",
    spanish_name: "Enfermedad Pulmonar Crónica",
    type: "category",
    options: ["No", "Mild", "Moderate", "Severe"],
    spanish_options: ["No", "Leve", "Moderada", "Severa"],
    default: "",
    group: "comorbidities",
  },
  {
    field_name: "Urgency upon admission",
    spanish_name: "Urgencia en admisión",
    type: "category",
    options: ["Elective", "Urgent", "Emergency", "Emergency - Rescue"],
    spanish_options: [
      "Electiva",
      "Urgente",
      "Emergencia",
      "Emergencia - Rescate",
    ],
    default: "",
    group: "procedure",
  },
  {
    field_name: "Weight of procedure",
    spanish_name: "Peso del procedimiento",
    type: "category",
    options: [
      "Isolated CABG",
      "Isolated non-CABG",
      "Two procedures",
      "Three or more procedures",
    ],
    spanish_options: [
      "Aislado (Baipás Coronario)",
      "Aislado (No Baipás Coronario)",
      "Dos procedimientos",
      "Tres o más procedimientos",
    ],
    default: "",
    group: "procedure",
  },
  {
    field_name: "Aortic valve insufficiency",
    spanish_name: "Insuficiencia Aórtica",
    type: "category",
    options: ["No", "Trivial", "Mild", "Moderate", "Severe"],
    spanish_options: ["No", "Trivial", "Leve", "Moderada", "Severa"],
    default: "",
    group: "comorbidities",
  },
  {
    field_name: "Mitral valve regurgitation",
    spanish_name: "Insuficiencia Mitral",
    type: "category",
    options: ["No", "Trivial", "Mild", "Moderate", "Severe"],
    spanish_options: ["No", "Trivial", "Leve", "Moderada", "Severa"],
    default: "",
    group: "comorbidities",
  },
  {
    field_name: "Tricuspid valve regurgitation",
    spanish_name: "Insuficiencia Tricuspídea",
    type: "category",
    options: ["No", "Trivial", "Mild", "Moderate", "Severe"],
    spanish_options: ["No", "Trivial", "Leve", "Moderada", "Severa"],
    default: "",
    group: "comorbidities",
  },
];

function clean(obj) {
  // Modified from: https://stackoverflow.com/a/286162/8157508
  let cleanObj = { ...obj };
  for (var propName in cleanObj) {
    if (
      cleanObj[propName] === null ||
      cleanObj[propName] === undefined ||
      cleanObj[propName] === ""
    ) {
      delete cleanObj[propName];
    }
  }
  return cleanObj;
}

export default function Form() {
  // Initialize all fields with defaults
  const initState = {};
  for (const field of calculatorFields) {
    initState[field.field_name] = field.default;
  }

  const classes = useStyles();
  const [formRequest, setFormRequest] = useState(initState);
  const [useSpanish, setUseSpanish] = useState(true);

  let handleSubmit = () => {
    fetch("https://ayef8zx40j.execute-api.us-east-1.amazonaws.com/dev/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clean(formRequest)),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.risk_score !== undefined) {
          const risk = (parseFloat(data.risk_score) * 100).toFixed(2);
          alert("The risk score is: " + risk + "%");
        } else {
          alert(data.message);
        }
      });

    console.log(JSON.stringify(formRequest));
  };

  const formUpdate = useCallback(
    (field_name, value) => {
      updateRequest(field_name, value, formRequest, setFormRequest);
    },
    [formRequest, setFormRequest]
  );

  function buildField(field) {
    let className;

    switch (field.type) {
      case "number":
        className = classes.number;
        break;
      case "checkbox":
        className = classes.checkbox;
        break;
      case "category":
        className = classes.category;
        break;
    }

    return (
      <Field
        key={field.field_name}
        field={field}
        formUpdate={formUpdate}
        className={className}
        useSpanish={useSpanish}
      />
    );
  }

  function buildFormGroup(group) {
    let groupFields = calculatorFields.filter((field) => field.group === group);
    return (
      <FormGroup key={group} className={classes.formGroup}>
        {groupFields.map((field) => buildField(field))}
      </FormGroup>
    );
  }

  // Separate fields into groups
  let groups = new Set(calculatorFields.map((field) => field.group));
  groups = [...groups];

  let fields = groups.map((group) => buildFormGroup(group));

  const checkCleanRequest = () => {
    let currentRequest = JSON.stringify(formRequest);
    let cleanRequest = JSON.stringify(clean(formRequest));
    console.log(currentRequest, cleanRequest);
    console.log(currentRequest === cleanRequest);
    return currentRequest === cleanRequest;
  };
  return (
    <div className={classes.root}>
      <h1>Cardiac Surgery Mortality Risk Calculator</h1>
      <FormControl className={classes.formControl}>{fields}</FormControl>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleSubmit}
        className={classes.submitButton}
        disabled={!checkCleanRequest()}
      >
        submit
      </Button>
    </div>
  );
}
