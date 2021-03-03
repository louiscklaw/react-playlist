import * as React from "react";
import * as Yup from "yup";
import { SubForm } from "../../components/SubForm/SubForm";
import { ResultsView } from "../../components/ResultsView/ResultsView";
import { StepsContext } from "../../contexts/StepsContext";

export const Step1 = ({ formikProps }) => {
  const { values } = formikProps;
  const { steps, dispatch: stepsDispatch } = React.useContext(StepsContext);

  return (
    <div className="container">
      {steps.step1.current && (
        <SubForm
          config={{
            address: {
              street: {
                validation: Yup.string().required(
                  "Street address is required!"
                ),
                initialValue: (values.address && values.address.street) || "",
                component: {
                  type: "InputField",
                  props: {
                    placeholder: "Street",
                    "aria-label": "Please enter your street address",
                  },
                },
              },
              suburb: {
                validation: Yup.string().required(
                  "Suburb address is required!"
                ),
                initialValue: (values.address && values.address.suburb) || "",
                component: {
                  type: "InputField",
                  props: {
                    placeholder: "Suburb",
                  },
                },
              },
              city: {
                validation: Yup.string().required("City is required!"),
                initialValue: (values.address && values.address.city) || "",
                component: {
                  type: "Select",
                  props: {
                    options: [
                      {
                        label: "Please select...",
                        value: "",
                      },
                      {
                        label: "Adelaide",
                        value: "adelaide",
                      },
                      {
                        label: "Melbourne",
                        value: "melbourne",
                      },
                      {
                        label: "Sydney",
                        value: "sydney",
                      },
                    ],
                  },
                },
              },
            },
          }}
          onInvalid={(errorFieldIds) => {
            document.getElementById(errorFieldIds[0]).focus();
          }}
          onComplete={(addressValues) => {
            formikProps.setValues({
              ...formikProps.values,
              ...addressValues,
            });
            stepsDispatch({
              type: "SET_STEPS",
              value: {
                ...steps,
                step1: {
                  current: false,
                  complete: true,
                },
                step2: {
                  current: true,
                  complete: false,
                },
                step4: {
                  current: false,
                  complete: false,
                },
              },
            });
          }}
        >
          <button
            onClick={() => {
              formikProps.setTouched({ address: { street: true } });
              formikProps.setErrors({
                address: { street: "Please enter BLAH!" },
              });

              console.log(formikProps);
            }}
          >
            Generate error
          </button>
        </SubForm>
      )}
      {steps.step1.complete && (
        <ResultsView
          values={formikProps.values.address}
          onEdit={() => {
            stepsDispatch({
              type: "SET_STEPS",
              value: {
                ...steps,
                step1: {
                  current: true,
                  complete: false,
                },
              },
            });
          }}
        />
      )}
    </div>
  );
};
