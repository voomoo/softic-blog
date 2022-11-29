import SofticBlogLayout from "../../layout/layout";
import {useRouter} from "next/router";
import {useGetPostQuery, useGetUserQuery, useGetCommentsByPostIdQuery} from "../../_redux/slices/apiSlice";
import {Card, Divider} from "antd";
import Link from "next/link";
import {Comment} from "../../types"

const {Meta} = Card;

export default function SinglePost() {
    const router = useRouter()
    const {slug, userID} = router.query;
    const postData = useGetPostQuery(parseInt(slug as string));
    const commentsData = useGetCommentsByPostIdQuery(parseInt(slug as string));
    const userData = useGetUserQuery(parseInt(userID as string));
    return (
        <SofticBlogLayout pageTitle={postData?.data?.length > 0 ? postData?.data[0]?.title : "Softic-Blog"}>
            <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
                <Card
                    loading={postData?.isLoading}
                    style={{width: 800}}
                    actions={[
                        <div key={"commments"}>
                            <Divider>Comments</Divider>
                            {commentsData?.data?.map((comment:Comment, index:number) => (
                                <div key={index} style={{width: "90%", margin: "0px 20px"}}>
                                    <h4 style={{
                                        textAlign: "left",
                                        margin: "0"
                                    }}>User: {comment?.name}</h4>
                                    <h5 style={{
                                        textAlign: "left",
                                        margin: "0"
                                    }}>Email: {comment?.email}</h5>
                                    <p style={{
                                        textAlign: "left",
                                        margin: "0"
                                    }}>Comment: {comment?.body}</p>
                                    <Divider></Divider>
                                </div>
                            ))}

                        </div>
                    ]}
                >
                    <Meta
                        title={
                            <div>
                                <h4 style={{margin: "0"}}>
                                    Title: {postData?.data?.length > 0 ? postData?.data[0]?.title : "Loading"}
                                </h4>
                                <Link href={`/user/${userData?.data?.length > 0 ? userData?.data[0]?.id : "Loading"}`}
                                      style={{fontWeight: "lighter", fontSize: "14px", margin: "0", color: "#8d8d8d"}}>
                                    User: {userData?.data?.length > 0 ? userData?.data[0]?.name : "Loading"}
                                </Link>
                            </div>
                        }
                        description={postData?.data?.length > 0 ? postData?.data[0]?.body : "Loading"}
                    />
                </Card>
            </div>
        </SofticBlogLayout>
    )
}