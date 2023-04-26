import React from "react";
import Img1 from './img1.jfif';
import './img.css';
// import { AiFillBackward } from "react-icons/ai";
import { FaChessQueen,FaChessKing} from "react-icons/fa";

function Class(){
    return(
        <>
        <h1>Image</h1>
        <div className="img">
          <img src={Img1} alt="design" />
          {/* <p>< AiFillBackward /></p> */}
          <p>KING -<FaChessQueen/></p>
          <p>QUEEN -<FaChessKing/></p>
          
        </div>
        </>
    )
}
export default Class;