import Post from "../components/Post";
import client from "../apollo-client";
import { gql } from "@apollo/client";

//ba3535a6-a7fb-4b24-98ab-f7f65275ee9f
//5539a0d9-ac42-419d-b2f1-ff8ef7dda76e
const query = gql`
  query getPostById($id: ID!) {
    post(id: $id) {
      id
      title
      source
      body
      createdAt
      source
      photo
    }
  }
`;

export async function getServerSideProps(context) {

    const { id } = context.query;

    const { data } = await client.query({
        query, variables : { id }
    });

    return {
        props: {
            onepost: data.post
        }
    }
}

export default function PostData( { onepost } ) {
   
    return(
        <>
            {
               [onepost].map( data => (
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