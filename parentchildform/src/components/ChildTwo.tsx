export type FormData = {
  name: string;
  email: string;
  skills: string[];
};

export type ChildProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const SKILLS = ["React", "Node.js", "TypeScript", "CSS", "SQL"];

const ChildTwo: React.FC<ChildProps> = ({ formData, setFormData }) => {
  const handleCheckboxChange = (skill: string) => {
    if (formData.skills.includes(skill)) {
      // remove skill
      setFormData({
        ...formData,
        skills: formData.skills.filter((s) => s !== skill),
      });
    } else {
      // add skill
      setFormData({
        ...formData,
        skills: [...formData.skills, skill],
      });
    }
  };

  return (
    <div className="p-2 border rounded mt-2">
      <h3 className="font-bold">Child Two</h3>
      {SKILLS.map((skill) => (
        <label key={skill} className="block">
          <input
            type="checkbox"
            checked={formData.skills.includes(skill)}
            onChange={() => handleCheckboxChange(skill)}
          />
          {skill}
        </label>
      ))}
    </div>
  );
};

export default ChildTwo;