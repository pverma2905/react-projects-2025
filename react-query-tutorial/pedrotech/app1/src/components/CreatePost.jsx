import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'

const addPost = async (newPost)=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
        method:"POST",    
        headers:{"Content-Type":"application.json"},
        body:JSON.stringify(newPost)
        })
        return response.json()
}



const CreatePost = () => {
    const [title, setTitle] = useState("");
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn:addPost, 
    //     onSuccess:()=>{
    //         console.log("Post Created")
    //         queryClient.invalidateQueries({queryKey:['posts']})  
    // },
    onMutate: async (newPost) => {
      await queryClient.cancelQueries(["posts"]);
      const previousPosts = queryClient.getQueryData(["posts"]);
      queryClient.setQueryData(["posts"], (old) => [
        ...old,
        { id: Date.now(), ...newPost },
      ]);

      return { previousPosts };
    },
    onError: (err, newPost, context) => {
      queryClient.setQueryData(["posts"], context.previousPosts);
    },
})
    const handleSubmit = (e)=>{
        console.log("ffffff")
        e.preventDefault();
        mutate({title,body:"this is a new post"})
    }
  return (
    <div>
        <form>
            <input type='text'
            placeholder='Post Title..'
            onChange={(e)=>setTitle(e.target.value)}
            />
            <button onClick={handleSubmit}>Create</button>
        </form>
    </div>
  )
}

export default CreatePost