type FormData = {
  name: string;
  email: string;
  skills: string[];
};

type ChildOneProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const ChildOne: React.FC<ChildOneProps> = ({ formData, setFormData }) => {
  return (
    <div className="p-2 border rounded">
      <h3>Child One</h3>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="border p-1 m-1"
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="border p-1 m-1"
      />
    </div>
  );
};

export default ChildOne