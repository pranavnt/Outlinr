import logo from "./logo.svg";
import "./App.css";
import Element from "./components/Element";

import "antd/dist/antd.css";
import { Layout, Menu } from "antd";

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
          <Element />
        </div>
      </Content>
      <Footer style={{ textAlign: "center", fontSize: "20px" }}>
        Outlinr is made with &lt;3 by Pranav :){" "}
      </Footer>
    </Layout>
  );
}

export default App;
