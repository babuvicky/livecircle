import React, { useState } from "react";
import Img1 from "./img1.jfif";
import Img2 from "./img2.jfif";

export default function Blub(){
    const[change, usechange] = useState(Img1)

   
    const Off = () => {
        usechange({Img2})
    }
    return(
        <>

       
       <img src={change} alt="" />
        <button onClick={Off}>{Img1}</button>

        </>

    )
}