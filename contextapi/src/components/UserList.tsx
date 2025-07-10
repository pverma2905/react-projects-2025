import { useQuery } from "@tanstack/react-query";
import { useAppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
};

export interface SingleUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const fetchUsers = async()=>{
const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}

const UserList = () => {
    const navigate = useNavigate();
    const { data, isLoading, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

   if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;
  console.log(data);
 const { setUser } = useAppContext();
  const { setSelectedUser } = useUserContext();
    if (data && data.length > 0) {
        setUser(data); 
    }
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">User List</h2>
      <ul className="space-y-2">
        {data?.map((user) => (
          <li
            key={user.id}
            className="border p-2 rounded"
            onClick={() => {
              setSelectedUser({
                id: user.id,
                name: user.name,
                email: user.email,
                username: user.username, // or provide a default/fetched value
                phone: user.phone,
                website: user.website, // or provide a default/fetched value
              });
              navigate(`/users/${user.id}`);
            }}
          >
            <div>{user.name}</div>
            <div className="text-sm text-gray-600">{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList