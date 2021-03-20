import styles from "../styles/Body.module.css";

const NewBody = ( {logo }) => {

    return(
       <div className={styles.container}>
           <div className={styles.header}>
               <div>
                    <img src={logo} alt="nioz Logo" />
                    <span>&#9776;</span>
               </div>
               <hr></hr>
               <p>Democratizing news for all <strong>Haitians.</strong></p>
           </div>
       </div>
    );
}

export default NewBody;