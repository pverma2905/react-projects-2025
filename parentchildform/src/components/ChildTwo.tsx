export type FormData = {
  name: string;
  email: string;
  accepted: boolean;
};

export type ChildProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};
const ChildTwo: React.FC<ChildProps> = ({ formData, setFormData }) => {
  return (
    <div className="p-2 border rounded mt-2">
      <h3>Child Two</h3>
      <label>
        <input
          type="checkbox"
          checked={formData.accepted}
          onChange={(e) =>
            setFormData({ ...formData, accepted: e.target.checked })
          }
        />
        Accept Terms
      </label>
    </div>
  );
};

export default ChildTwo