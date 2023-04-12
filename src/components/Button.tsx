import clsx from "clsx";
import React from "react";
import Typography from "./Typography";

export default function Button({
  children,
  className,
  type,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "Primary" | "Secondary";
  onClick?: () => void;
}) {
  const boxClasses = clsx(className, {
    "group h-16 w-48 bg-[#44FFA1] hover:border-2 hover:border-[#44FFA1] hover:bg-[#24053E] ":
      type === "Primary",
    "group border-b-2 border-[#44FFA1]": type === "Secondary",
  });

  const textClasses = clsx(className, {
    "font-bold text-[#24053E] group-hover:text-[#44FFA1] ": type === "Primary",
    "font-bold text-white group-hover:text-[#44FFA1]": type === "Secondary",
  });

  return (
    <button className={boxClasses} onClick={onClick}>
      <Typography type="Body" className={textClasses}>
        {children}
      </Typography>
    </button>
  );
}
