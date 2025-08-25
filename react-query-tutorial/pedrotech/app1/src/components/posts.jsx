import { useQuery } from '@tanstack/react-query'


const fetchPosts = async ()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if(!response.ok) throw new Error('Error Fetching Data');
  return response.json();
}
const posts = () => {
 const {data, isLoading, error} = useQuery({
  queryKey:["posts"],
  queryFn: fetchPosts,
  staleTime:10000
})
if(isLoading) return <p>Loading....</p>
if(error) return <p>Error Occured: {error.message}</p>
  return (
    <>
     {data.map((post,key)=>(
      <p key={post.id}>{post.title}</p>
     ))}
    </>
  )
}

export default posts