import React from "react";
import { connect } from "react-redux";
import { Container, Divider, Header, Message } from "semantic-ui-react";

import ProfileForm from "./ProfileForm";

const App = props => (
  <Container>
    <Divider hidden />

    <Header as="h1" dividing>
      A sample form with Semantic UI React and Redux Form
    </Header>
    <ProfileForm onSubmit={() => console.log("ProfileForm was submitted")} />

    <Message>
      <Message.Header>Form data:</Message.Header>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Message>
  </Container>
);

const mapStateToProps = state => {
  return state.form.profile
    ? {
        values: state.form.profile.values,
        submitSucceeded: state.form.profile.submitSucceeded
      }
    : {};
};

export default connect(mapStateToProps)(App);
