
import './App.css'

function App() {
  const { data, isFetching, refetch } = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
  enabled: false, // disable auto-fetch
});
  
  return (
   <div>
    <button onClick={() => refetch()}>Load Users</button>
    {isFetching && <p>Loading...</p>}
    {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
  </div>
  )
}

export default App
