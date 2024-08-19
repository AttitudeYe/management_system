import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from 'next/link'
import { Layout, Menu, theme, Button, ConfigProvider } from 'antd';
import { useState } from "react";


const { Header, Sider, Footer, Content } = Layout;

export default function App({ Component, pageProps }: AppProps) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const children = (
    <ConfigProvider >
      <Component {...pageProps} />
    </ConfigProvider>
  )

  const signOut = () => {
    // localStorage.removeItem('token')
    window.location.href = '/login'
  }

  if (pageProps.layout) {
    return (
      <Layout
        style={{
          height: '100vh'
        }}
      >
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                label: <Link href='/student'>student</Link>,
              },
              {
                key: '2',
                label: <Link href='/home'>home</Link>,
              },
              {
                key: '3',
                label: <Link href='/echarts'>echart</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%',
            }}>
              <Button type="primary" danger style={{ marginRight: 16 }}>占位符</Button>
              <Button type="primary" onClick={signOut} danger style={{ marginRight: 16 }}>退出登录</Button>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              overflowY: 'auto',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
          <Footer>
            Footer
          </Footer>
        </Layout>
      </Layout >
    );
  }

  return children;
}
