import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tasksList:[],
    selectedTask:{}
}

const taskSlice=createSlice({
    name:'taskSlice',
    initialState,
    reducers:{
        addTaskToList:(state,action)=>{
            const id=Math.random()*100
            const task={...action.payload,id,check:false}
            state.tasksList.push(task)
        },
        removeTaskFromList:(state,action)=>{
            state.tasksList=state.tasksList.filter((task)=>task.id !== action.payload.id)


        },

        updateTaskList:(state,action)=>{
            state.tasksList=state.tasksList.map((task)=>
                task.id === action.payload.id?action.payload:task
            )

        },
        setselectedTask:(state,action)=>{
            state.selectedTask=action.payload

        },
        check:(state,action)=>{
                state.tasksList=action.payload
            
        }

    }
})

export const {addTaskToList,removeTaskFromList,updateTaskList,setselectedTask,check}=taskSlice.actions
export default taskSlice.reducer