import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deletePost, fetchPosts, updatePost } from '../API/api';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const FetchRQ = () => {
  const [pageNumber,setPageNumber]=useState(0);

  const queryClient = useQueryClient();

  const { data , isLoading, isError, error } = useQuery({
    queryKey: ['posts',pageNumber],
    queryFn:()=> fetchPosts(pageNumber),
    placeholderData:keepPreviousData,
    //gcTime:1000, // caching
    //staleTime:50000 // api call stop
    // refetchInterval:1000, // api call continouly
    // refetchIntervalInBackground:true // api call continouly
  });

  ///// mutaion function to delete the post
  const deleteMutation = useMutation({
    mutationFn:(id)=>deletePost(id),
    onSuccess:(data,id) =>{
      queryClient.setQueryData(['posts',pageNumber],(curElem)=>{
        return curElem?.filter((post)=>post.id !== id)
      })
    }
  })

    ///// mutaion function to update the post
  const updateMutation = useMutation({
    mutationFn:(id)=>updatePost(id),
    onSuccess:(apiData,postId) =>{
      console.log(apiData,postId)
      queryClient.setQueryData(['posts',pageNumber],(postsData)=>{
        return postsData?.map((curPost)=>{
          return curPost.id === postId ? {...curPost,title:apiData.data.title} :curPost;
        })
      })
    }
  })


  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message || "Something Went Wrong!"}</p>;

  return (
    <div>
      <ul className='section-accordion'>
        {data.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <NavLink to={`/rq/${id}`}>
                <p>{id}</p>
                <p>{title}</p>
                <p>{body}</p>
              </NavLink>
              <button onClick={()=>deleteMutation.mutate(id) }>Delete</button>
              <button onClick={()=>updateMutation.mutate(id) }>Update</button>
            </li>
          );
        })}
      </ul>

        <div className='pagination-section container'>
          <button disabled={pageNumber===0 ? true:false} onClick={()=>setPageNumber((prev)=>prev-3)}>Prev</button>
          <h2>{(pageNumber/3)+1}</h2>
          <button onClick={()=>setPageNumber((prev)=>prev+3)}>Next</button>
        </div>

    </div>
  );
};

export default FetchRQ;