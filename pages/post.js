import Post from "../components/Post";
import client from "../apollo-client";
import { gql } from "@apollo/client";

//fe82498b-eccc-4fd5-a32b-06b70aba6a8f
// const query = gql`
//     query{
//         posts{
//             title
//             body
//             photo
//             source
//         }
//     }
// `;

// export async function getServerSideProps() {
//     const { data } = await client.query({
//         query 
//     });

//     console.log(data);
//     return{
//         props: {
//             post: data.posts
//         }
//     }
// }

export default function PostData({ post }) {
    return(
        <>
        <Post />
          {/* {post.map((post) => (
               <Post
                title = {post.title}
                photo = {post.photo || "./default.png"}
                body = {post.body}
                source= {post.source }
               />
            ))} */}
        </>
    );
}