import { Children, createContext, useReducer } from "react"


 
export  const  PostList=createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
 });

const postListReducer=(currPostlist,action)=>{
    return currPostlist;
}
 const PostLsitProvider=({children})=>{
    const [postList,dispatchpostList]=useReducer(postListReducer,DEFAULT_POST_LIST);

    const addPost=()=>{

    };
    const deletePost=()=>{

    };
    return<PostList.Provider value={
        { postList,
        addPost,
        deletePost,
    }
    }>
        {children}
    </PostList.Provider>
 }

 const DEFAULT_POST_LIST=[{
    id:"1",
    title:"Going to Mumbai",
    body:"Hi Friends, I am going to Mumbai for my vacations.",
    reactions:2,
    userId:"user-9",
    tags:[
    "vacation","Mumbai","Enjoying"
    ]
 },
 {
    id:"2",
    title:"Pass ho bhai",
    body:"Hi Friends, I am going to Mumbai for my vacations.",
    reactions:15,
    userId:"user-12",
    tags:[
    "Graduating","Unbelievable","Enjoying"
    ]
 },

]

 export default PostLsitProvider;