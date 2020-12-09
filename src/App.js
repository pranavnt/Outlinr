import logo from "./logo.svg";
import "./App.css";

import "antd/dist/antd.css";
import { Layout, Menu } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}></Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <h1 style={{ color: "white", fontSize: "30px" }}>Outlinr</h1>
          </Header>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            ></div>
          </Content>
          <Footer style={{ textAlign: "center", fontSize: "20px" }}>
            Outlinr is made with &lt;3 by Pranav :){" "}
          </Footer>
        </Layout>
      </Layout>
      ,
    </div>
  );
}

export default App;
