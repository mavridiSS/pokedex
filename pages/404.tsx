import React from "react";
import Error from "../components/Error";
import { Custom404Container } from "../components/sharedstyles";

export default function Custom404() {
  return (
    <Custom404Container>
      <Error error={"This page could not be found."} />
    </Custom404Container>
  );
}
