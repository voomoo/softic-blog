export function mergeData(posts:any, comments:any, users:any) {
    const mergedData = [];
    for (let i = 0; i < posts?.length; i++) {
        const post = {...posts[i]};
        post["comment"] = comments.filter((comment:any) => comment.postId === post.id);
        post["user"] = users.find((user:any) => user.id === post.userId);
        mergedData.push({
            ...post
        });
    }
    return mergedData;
}
