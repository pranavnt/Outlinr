import logo from "./logo.svg";
import "./App.css";
import Introduction from "./components/Intro";
import Body from "./components/Body";

import "antd/dist/antd.css";
import { Layout, Collapse } from "antd";

const { Panel } = Collapse;
const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <h1 style={{ color: "white", fontSize: "30px" }}>
          {" "}
          &nbsp;&nbsp;&nbsp;Outlinr
        </h1>
      </Header>
      <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, textAlign: "center" }}
        >
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="Introduction" key="1">
              <Introduction />
            </Panel>
            <Panel header="Body Paragraph 1" key="2">
              <Introduction />
            </Panel>
            <Panel header="Body Paragraph 2" key="3">
              <Introduction />
            </Panel>
          </Collapse>
          ,
        </div>
      </Content>
      <Footer style={{ textAlign: "center", fontSize: "20px" }}>
        Outlinr is made with &lt;3 by Pranav :){" "}
      </Footer>
    </Layout>
  );
}

export default App;
