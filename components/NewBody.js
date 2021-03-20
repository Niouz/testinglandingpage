import styles from "../styles/Body.module.css";

const NewBody = ( { logo, interfaceNiouzImage }) => {

    return(
       <div className={styles.container}>
           <div className={styles.header}>
               <div>
                    <img src={logo} alt="nioz Logo" />
                    <span>&#9776;</span>
               </div>
               <p>Democratizing news for all <strong>Haitians.</strong></p>
           </div>

           <div className={styles.spot}>
               <h3>Spot on news happening in the streets </h3>
               <p>Get all the news on your area and engage in those that matter to you. </p>
               <img src={interfaceNiouzImage} />
           </div>

           
       </div>
    );
}

export default NewBody;