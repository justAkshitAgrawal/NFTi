"use client";

interface ButtonProps {
  name: string;
  icon?: React.ReactNode;
  background?: string;
  color?: string;
  border?: string;
}

const Button = ({ name, icon, background, color, border }: ButtonProps) => {
  return (
    <button
      style={{
        background: background,
        color: color,
        border: border,
      }}
      className="py-3 px-7  border border-[#424242] rounded-full z-30 flex items-center gap-2 transition hover:text-white hover:bg-[#424242] ease-in-out duration-300 "
    >
      {icon && icon}
      {name}
    </button>
  );
};

export default Button;
