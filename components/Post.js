import styles from "../styles/Post.module.css";
import NewFooter from "./NewFooter";

const Post = ( { title, body, photo, source } ) => {
    return(
        <main className={styles.container}>

            <header className={styles.header}> 
                <img src = "./logo.png" /> 
            </header>

            <div className={styles.postPhoto}>
                <img src ="./image.jpg" />
            </div>

            <div className={styles.postTitle}>
                <h2>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</h2>
                {/* <h2>{title}</h2> */}
            </div>

            <div className={styles.postBody}>
                <p>
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
 it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
   sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
   including versions of Lorem Ipsum    
   is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
 it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
   sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
   including versions of Lorem Ipsum   
   is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
 it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
   sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
   including versions of Lorem Ipsum   
   is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
 it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
   sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
   including versions of Lorem Ipsum   
   is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
 it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
   sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
   including versions of Lorem Ipsum   
   is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
 it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
   sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
   is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
 it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
   sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
   including versions of Lorem Ipsum   
   is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
 it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
   sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 

                </p>
                <p>Source</p>
                {/* <p>{body}</p> */}
                <p>{source}</p>
            </div>
            
            <NewFooter 
                logo = "hero-logo.png" 
                googleLink = "https://niouzapp.com"
                playStore="google-play-icon.png" 
            />
        </main>
    );
}

export default Post;

{/*
 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
 it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
   sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
   including versions of Lorem Ipsum    
*/}