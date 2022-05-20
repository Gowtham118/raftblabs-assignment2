import ChessBoard from "./views/components/chessBoard/ChessBoard";

import "./App.css";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">KNIGHTS TOUR</Header>
        <Content className="content">
          <ChessBoard />
        </Content>
        <Footer style={{ textAlign: "center" }}>Gowtham ©2022</Footer>
      </Layout>
    </div>
  );
}
