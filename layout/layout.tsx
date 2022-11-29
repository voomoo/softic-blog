import Head from "next/head";
import {Col, Layout, Row} from "antd";
import Link from "next/link";

interface Props {
    children?: React.ReactNode;
    pageTitle?: string;
}


export default function SofticBlogLayout({children, pageTitle}: Props) {
    const {Header, Content, Footer} = Layout;
    return (
        <div>
            <Head>
                <title>
                    {pageTitle}
                </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta name="description" content="A sample blog for the assessment of softice.ai"/>
                <meta property="og:title" content="Softic-Blog"/>
                <meta property="og:description" content="A sample blog for the assessment of softice.ai"/>
                <meta property="og:type" content="blog"/>
                <meta property="og:url" content="https://www.softic.ai/"/>
                <meta property="og:image" content="https://softic.ai/wp-content/uploads/2022/04/Untitled-2-1.png"/>
                <meta name="twitter:title" content="oftic-Blog"/>
                <meta name="twitter:description" content="A sample blog for the assessment of softice.ai"/>
                <meta name="twitter:image" content="https://softic.ai/wp-content/uploads/2022/04/Untitled-2-1.png"/>
                <meta name="twitter:card" content="summary_large_image"/>

            </Head>
            <Layout className="layout" style={{minHeight: "100vh"}}>
                <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
                    <Row gutter={12} align={"middle"}>
                        <Col className={"gutter-row"} span={6}>
                            <Link href={"/"} style={{margin: 0, color: "white"}}>Softic-Blog</Link>
                        </Col>
                    </Row>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <div className="site-layout-content">{children}</div>
                </Content>
                <Footer style={{textAlign: 'center', background: "#e5e5e5"}}>Softic-Blog ©2022 Created by Rakibul
                    Hasan</Footer>
            </Layout>

        </div>
    )
}