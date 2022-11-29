import SofticBlogLayout from "../layout/layout";
import {useGetCommentsQuery, useGetPostsQuery, useGetUsersQuery} from "../_redux/slices/apiSlice";
import {Avatar, Button, Card, Col, Popconfirm, Row} from "antd";
import {useEffect, useState} from "react";
import {mergeData} from "../helpers/mergeData";
import Link from "next/link";
import {Post} from "../types";
import {DeleteOutlined} from "@ant-design/icons";

const {Meta} = Card;

export default function Home() {
    const [initialLimit, setInitialLimit] = useState(20);
    const [mergedData, setMergedData] = useState<Post[]>([]);
    const [limitedData, setLimitedData] = useState<Post[]>([]);
    const postData = useGetPostsQuery();
    const commentData = useGetCommentsQuery();
    const userData = useGetUsersQuery();

    useEffect(() => {
        if (postData.data && commentData.data && userData.data) {
            setMergedData(mergeData(postData.data, commentData.data, userData.data));
        }
    }, [postData.data, commentData.data, userData.data]);

    useEffect(() => {
        setLimitedData(mergedData.slice(0, initialLimit));
    }, [initialLimit, mergedData]);

    const loadMore = () => {
        setInitialLimit(initialLimit + 10);
    }

    const confirm = (index: number) => {
        const newMergedData = [...mergedData];
        newMergedData.splice(index, 1);
        setMergedData(newMergedData);
    };

    return (
        <SofticBlogLayout pageTitle={"Softic-Blog"}>
            <Row gutter={24} style={{margin: "20px auto"}} justify={"center"} align={"middle"}>
                {postData?.isLoading &&
                    <Col span={24} style={{marginTop: "20px"}}>
                        <Card loading={postData?.isLoading} title={"Loading"} bordered={false}>
                            Loading...
                        </Card>
                    </Col>
                }
                {limitedData?.map((post: Post, index: number) => (
                    <Col span={24} key={post?.id} style={{marginTop: "20px"}}>
                        <div style={{display: "flex", justifyContent:"center"}}>
                            <Card
                                style={{width: 800}}
                                actions={[
                                    <div key={"user"}>
                                        <Link href={`/user/${post?.userId}`}>Post By: {post?.user?.name}</Link>
                                    </div>,
                                    <div key={"comments"}>
                                        <Link href={{pathname: `/post/${post?.id}`, query: {userID: post?.userId?.toString()}}}>Comments: {post?.comment?.length}</Link>
                                    </div>,
                                    <Popconfirm
                                        title="Are you sure to delete this task?"
                                        onConfirm={() => confirm(index)}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <DeleteOutlined /> Delete
                                    </Popconfirm>
                                ]}
                            >
                                <Meta
                                    title={<Link href={{pathname: `/post/${post?.id}`, query: {userID: post?.userId?.toString()}}}>{post?.title}</Link>}
                                    description={post?.body}
                                />
                            </Card>
                        </div>
                    </Col>
                ))}

                <Col span={24} style={{marginTop: "20px", display: "flex", justifyContent: "center"}}>
                    <Button onClick={loadMore}>Load More</Button>
                </Col>

            </Row>
        </SofticBlogLayout>
    )
}
