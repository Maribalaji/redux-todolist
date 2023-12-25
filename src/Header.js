import React from "react";
import { useSelector } from 'react-redux';


const Header=()=>{

        const {tasksList}= useSelector((state)=>state.tasks)
    
    return(
        <div>
            <h1 className="text-danger text-center my-4">To-do-list</h1>
            {/* <p className="text-center">{`currently ${tasksList.length} Task pending`}</p> */}

        </div>
    )
}
export default Header