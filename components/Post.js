import tw from 'twin.macro';
import React, { useEffect } from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";

const Post = ( { title, body, photo, source, postDate } ) => {

    useEffect(() => {
      
        let bodyText = document.querySelector("#text");
        const paragraphToArray = bodyText.textContent.split(" ");

            let newPara = [];
            paragraphToArray.map( (data) => {
              
                data = data.replace(".", ".<br />");
                newPara.push(data);
            });
            
            newPara = newPara.join(' ');
            bodyText.innerHTML = newPara;

      }, []);

    return(
        <main tw="">
            <Header />
            
            <header tw="flex bg-secondary-100 px-2 py-4 w-full h-14"> 
                <img tw="w-20" src = "./logo.png" /> 
            </header>

            <div tw="shadow-md relative">
                <img tw=" object-fill md:h-full h-88 w-full " src ={photo} />

                <div tw="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                <svg tw="w-4 text-primary inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span tw="text-primary"> { postDate } </span>
                </div>
            </div>

            <div tw=" flex justify-center w-full md:text-lg flex bg-secondary-100 " >
                <h2 tw="text-primary font-bold p-4 text-center"> {title} </h2>
            </div>

            <div tw="max-w-max mx-auto p-8 md:max-w-4xl w-full text-justify md:p-12">
                <p id="text" > {body} </p>
                <p tw=" flex justify-end mt-4">{source}</p>
            </div>
            
            <NewFooter 
                logo = "hero-logo.png" 
                googleLink = "https://niouzapp.com"
                playStore = "google-play-icon.png" 
            />
        </main>
    );
}

export default Post;
