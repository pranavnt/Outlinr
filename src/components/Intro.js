import React from "react";
import { Row, Col, Card } from "antd";

export default class Introduction extends React.Component {
  render() {
    return (
      <div>
        <Card title="Hook">
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
        <Card title="Bridge/Context">
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
        <Card title="Thesis">
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
