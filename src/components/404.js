import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Page404 extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 auto",
            marginTop: "4rem",
          }}
        >
          <h1>Page Not Found </h1>
          <img
            src="https://image.flaticon.com/icons/png/512/868/868753.png"
            alt="404"
          />
          <Button variant="warning" size="lg" href="/">
            Back Home
          </Button>
        </div>
      </div>
    );
  }
}

export default Page404;
