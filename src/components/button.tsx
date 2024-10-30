
interface ButtonProps {
  label: string;
  className: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  type = "button",
  
}) => {
  return (
    <div>
      <button type={type} onClick={onClick} className={className}>
        {" "}
        {label}
      </button>
    </div>
  );
};

export default Button