const posts = [
    {id:1, title: "Post One"},
    {id:2, title: "Post Two"},

];

const getPost = () => posts;


export const getPostLength = () => {
    return posts.length;
}

export default getPost ;