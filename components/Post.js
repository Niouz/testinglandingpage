import styles from "../styles/Post.module.css";
import NewFooter from "./NewFooter";

const Post = ( { title, body, photo, source } ) => {
    return(
        <main className="">

            <header className="flex bg-secondary-100 px-2 py-4 w-full h-16"> 
                <img className="w-20 " src = "./logo.png" /> 
            </header>

            <div className="flex z-10">
                <img className="w-full" src ="./image.jpg" />
            </div>

            <div className=" w-full h-28 bg-secondary-100 md:text-lg flex" >
                <h2 className="text-primary text-center sm:text-xl md:p-4 p-2">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</h2>
            </div>

            <div className="w-full lg:p-20 md:p-12 p-8  text-justify">
                <p className="">
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


                </p>
                <p className=" flex justify-end mt-4">Source</p>
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