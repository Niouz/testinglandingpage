import Post from "../components/Post";
import client from "../apollo-client";
import { gql } from "@apollo/client";

//624177e3-b563-4742-8a36-17a10b70ba4f
const query = gql`
    query {
        post(id: "7f21914c-d2dd-4473-8ff3-ec0627b24edc") {
        id
        title
        body
        photo
        source
        createdAt
        }
    }
`;

export async function getServerSideProps() {
    const { data } = await client.query({
        query
    });

    return {
        props: {
            onepost: data.post
        }
    }
}

export default function PostData( {onepost} ) {
    return(
        <>
            {
               onepost = [onepost],
               onepost.map( data => (
                   <Post 
                    title = { data.title }
                    body = { data.body }
                    postDate = { data.createdAt }
                    photo = { data.photo || "./image.jpg"}
                    source = { data.source }
                   />
               ))
            }
        </>
    );
}