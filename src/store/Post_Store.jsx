import { Children, createContext, useReducer } from "react"


 
export  const  PostList=createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
 });

const postListReducer=(currPostlist,action)=>{
 let newPostList=currPostlist;
   if (action.type==='DELETE_POST'){
    newPostList=currPostlist.filter(post=>post.id!==action.payload.postID)
    
   }else if(action.type==="ADD_POST"){
     newPostList=[action.payload,...currPostlist];
     console.log(`${newPostList}`)
    
   }

    return newPostList;

}
 const PostLsitProvider=({children})=>{
    const [postList,dispatchpostList]=useReducer(postListReducer,DEFAULT_POST_LIST);

    const addPost=(userID,posttitle,body,reaction,tags)=>{
       
    dispatchpostList({
        type:"ADD_POST",
        payload:{
            id:Date.now(),
    title:posttitle,
    body:body,
    reactions:reaction,
    userId:userID,
    tags:tags
    

        }
    })

    };
    const deletePost=(postID)=>{
        dispatchpostList({
               type:"DELETE_POST",
               payload:{
                postID,
               },

        });

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