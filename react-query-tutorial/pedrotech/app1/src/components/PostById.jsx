import { useQuery } from '@tanstack/react-query'

const fetchPosts = async (id)=>{
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if(!response.ok) throw new Error('Error Fetching Data');
  return response.json();
}
const PostById = ({id}) => {
  const {data, isLoading, error} = useQuery({
    queryKey:["posts", id],
    queryFn: ()=> fetchPosts(id),
    staleTime:10000})
if(isLoading) return <p>Loading....</p>
if(error) return <p>Error Occured: {error.message}</p>
  return (
    <>
    {data.title}
    </>
  )
}

export default PostById