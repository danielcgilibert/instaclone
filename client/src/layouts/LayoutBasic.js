import React from "react";
import { Container } from "semantic-ui-react";

export default function LayoutBasic(props) {
  const { children } = props;
  return (
    <>
      <h1>Header</h1>
      <Container className="layout-basic">{children}</Container>
    </>
  );
}
