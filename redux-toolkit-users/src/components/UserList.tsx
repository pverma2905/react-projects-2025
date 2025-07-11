import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../features/userSlice';
import { type RootState } from '../app/store';
import { useEffect } from 'react';
import type { SingleUser } from '../types/User';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

export const UserList = () => {
  const dispatch = useDispatch();
 const users = useSelector((state: RootState) => state.users?.data as SingleUser[] ?? []);

  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  console.log('UserList rendered',data);

  useEffect(() => {
    if (data && data.length > 0) {
        console.log('Dispatching setUsers with data:', data);
      dispatch(setUsers(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <div>Loading users...</div>;
  if (error) return <div>Error loading users.</div>;

  return (
    <>
    <ul>
      {users.map((user: SingleUser) => (
        <li key={user.id}>
          {user.name} -{user.username}
        </li>
      ))}
    </ul>
    </>
    
  )

}