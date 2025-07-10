import { Outlet, Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="settings">Go to Settings</Link>
      <Outlet />
    </div>
  );
}