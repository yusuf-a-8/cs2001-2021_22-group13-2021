import React, { useState } from "react";
import db from "./firebase-config"
import {collection, addDoc, Timestamp, setDoc, query, orderBy, onSnapshot} from 'firebase/firestore'
import selected from "./DropdownSelect"

function ContactForm() {
  // stores user input as amount
  const [amount, setAmount] = useState("");
  

 

  // contact form onSubmit handle
  const formHandle = async () => {
    try {
      const docRef = await addDoc(collection(db, "users" ), {
        NumberOfItems: { amount },
        
      });
      docRef();
      console.log("Document written with ID:", docRef.id);
    } catch (e) {
      console.error("Error adding document", e);
    }
  };


  return(
    
    <div className="wrapper">
      
      <form onSubmit={formHandle} >
        
       
         
           Enter how many items you wish to recycle:
           <input type="number"
            id="userInput" 
            onChange={(e) => {
              setAmount(e.target.value);}}
            onClick={formHandle}
            placeholder={"Enter amount"} />
            
            <button type="submit">Submit</button>
            

              
         
         
       </form>
       


       
       
    </div>
    
    
  )
  }; 

export default ContactForm;