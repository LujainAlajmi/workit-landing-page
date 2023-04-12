import clsx from "clsx";
import React from "react";

export default function Typography({
  children,
  className,
  type,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "HeadingL" | "HeadingM" | "HeadingS" | "Body";
}) {
  const classes = clsx(className, {
    "font-[Fraunces] text-[50px] font-semibold leading-[50px] md:text-[60px] md:leading-[60px] lg:text-[80px] lg:leading-[80px]":
      type === "HeadingL",
    "font-[Fraunces]  font-semibold leading-[64px]": type === "HeadingM",
    "font-[Fraunces] text-[32px] font-semibold leading-[40px]":
      type === "HeadingS",
    "font-[Manrope] text-[18px]  leading-[32px]": type === "Body",
  });

  return <div className={classes}>{children}</div>;
}
