export interface User {
  id: number;
  name: string;
  email: string;
  // … other fields
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;

  fetchUsers: () => Promise<void>;
  clearUsers: () => void;
}