interface InputProps {
  label: string;
  className: string;

  type?: "button" | "submit" | "reset";
}

const Input: React.FC<InputProps> = ({
  label,
 
  className,
  type = "button",
}) => {
  return (
    <div>
      <input type={type} className={className}>
        {" "}
        {label}
      </input>
    </div>
  );
};

export default Input;
