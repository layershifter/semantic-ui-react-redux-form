import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Message } from "semantic-ui-react";

const renderCheckbox = field => (
  <Form.Checkbox
    checked={!!field.input.value}
    name={field.input.name}
    label={field.label}
    onChange={(e, { checked }) => field.input.onChange(checked)}
  />
);

const renderRadio = field => (
  <Form.Radio
    checked={field.input.value === field.radioValue}
    label={field.label}
    name={field.input.name}
    onChange={(e, { checked }) => field.input.onChange(field.radioValue)}
  />
);

const renderSelect = field => (
  <Form.Select
    label={field.label}
    name={field.input.name}
    onChange={(e, { value }) => field.input.onChange(value)}
    options={field.options}
    placeholder={field.placeholder}
    value={field.input.value}
  />
);

const renderTextArea = field => (
  <Form.TextArea
    {...field.input}
    label={field.label}
    placeholder={field.placeholder}
  />
);

const ProfileForm = props => {
  const { handleSubmit, reset } = props;

  return (
    <Fragment>
      <Message info>
        <p>
          You will don't need any special mappings for <code>Form.Input</code>,
          because it passed events from native inputs.
        </p>

        <p>
          The situation with other components is more complicated, because the{" "}
          <code>Field</code> relies on the native events. However, it can be
          easily with{" "}
          <a
            href="https://redux-form.com/7.4.2/docs/api/field.md/#2-a-stateless-function"
            target="_blank"
          >
            stateless function
          </a>. We recomend to wrap them with generic components to reduce forms
          complexivity.
        </p>
      </Message>

      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Field
            component={Form.Input}
            label="First name"
            name="firstName"
            placeholder="First name"
          />
          <Field
            component={Form.Input}
            label="Last name"
            name="lastName"
            placeholder="Last name"
          />
          <Field
            component={renderSelect}
            label="Gender"
            name="gender"
            options={[
              { key: "m", text: "Male", value: "male" },
              { key: "f", text: "Female", value: "female" }
            ]}
            placeholder="Gender"
          />
        </Form.Group>

        <Form.Group inline>
          <label>Quantity</label>

          <Field
            component={renderRadio}
            label="One"
            name="quantity"
            radioValue={1}
          />
          <Field
            component={renderRadio}
            label="Two"
            name="quantity"
            radioValue={2}
          />
          <Field
            component={renderRadio}
            label="Three"
            name="quantity"
            radioValue={3}
          />
        </Form.Group>

        <Field
          component={renderTextArea}
          label="About"
          name="about"
          placeholder="Tell us more about you..."
        />

        <Field
          component={renderCheckbox}
          label="I agree to the Terms and Conditions"
          name="isAgreed"
        />

        <Form.Group inline>
          <Form.Button primary>Submit</Form.Button>
          <Form.Button onClick={reset}>Reset</Form.Button>
        </Form.Group>
      </Form>
    </Fragment>
  );
};

export default reduxForm({
  form: "profile"
})(ProfileForm);
