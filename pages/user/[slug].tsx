import SofticBlogLayout from "../../layout/layout";
import {useRouter} from "next/router";
import {useGetUserQuery} from "../../_redux/slices/apiSlice";
import {Avatar, Card} from "antd";

const {Meta} = Card;

export default function UserInfo() {
    const router = useRouter()
    const {slug} = router.query;
    const userData = useGetUserQuery(parseInt(slug as string));
    return (
        <SofticBlogLayout pageTitle={userData?.data?.length > 0 ? userData?.data[0]?.name : "Softic-Blog"}>
            <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
                <Card
                    style={{ width: 300 }}
                    cover={
                        <img
                            alt={userData?.data?.length > 0 ? userData?.data[0]?.name : "Loading"}
                            src="https://joeschmoe.io/api/v1/random"
                        />
                    }
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={userData?.data?.length > 0 ? userData?.data[0]?.name : "Loading"}
                        description={userData?.data?.length > 0 ? userData?.data[0]?.email : "Loading"}
                    />
                </Card>
            </div>
        </SofticBlogLayout>
    )
}