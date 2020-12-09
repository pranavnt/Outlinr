import React from "react";
import { Card, Col, Row } from "antd";

export default class Introduction extends React.Component {
  render() {
    return (
      <div>
        <Card title="Topic Sentence">
          <textarea
            style={{
              width: "95%",
              height: "20%",
              borderRadius: "10px",
              boxShadow: "0 0 0 3px #000",
              border: "5px solid transparent",
              fontSize: "20px",
            }}
          ></textarea>
        </Card>
        <Card title="Quote 1">
          <textarea
            style={{
              width: "95%",
              height: "20%",
              borderRadius: "10px",
              boxShadow: "0 0 0 3px #000",
              border: "5px solid transparent",
              fontSize: "20px",
            }}
          ></textarea>
        </Card>
        <Card title="Quote 2">
          <textarea
            style={{
              width: "95%",
              height: "20%",
              borderRadius: "10px",
              boxShadow: "0 0 0 3px #000",
              border: "5px solid transparent",
              fontSize: "20px",
            }}
          ></textarea>
        </Card>
        <Card title="Quote 3">
          <textarea
            style={{
              width: "95%",
              height: "20%",
              borderRadius: "10px",
              boxShadow: "0 0 0 3px #000",
              border: "5px solid transparent",
              fontSize: "20px",
            }}
          ></textarea>
        </Card>
        <Card title="Conclusion">
          <textarea
            style={{
              width: "95%",
              height: "20%",
              borderRadius: "10px",
              boxShadow: "0 0 0 3px #000",
              border: "5px solid transparent",
              fontSize: "20px",
            }}
          ></textarea>
        </Card>
      </div>
    );
  }
}
