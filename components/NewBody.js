import styles from "../styles/Body.module.css";

const NewBody = ( { logo, interfaceNiouzImage }) => {

    return(
       <div className={styles.container}>
           <div className={styles.header}>
               <div>
                    <img src={logo} alt="nioz Logo" />
                    <span>&#9776;</span>
               </div>
               <h3>Democratizing news for all <strong>Haitians.</strong></h3>
           </div>

           <div className={styles.spot}>
               <h4>Spot on news happening in the streets </h4>
               <p>Get all the news on your area and engage in those that matter to you. </p>
               <img src={interfaceNiouzImage} />
           </div>

           
       </div>
    );
}

export default NewBody;