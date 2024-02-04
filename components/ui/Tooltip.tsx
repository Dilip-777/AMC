"use client";

import { cn } from "../utils/cn";

interface ToolTipProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  children: React.ReactNode;
  className?: string;
}

export default function ToolTip({
  text,
  children,
  className,
  ...props
}: ToolTipProps) {
  return (
    <div
      className={cn("group relative inline-block cursor-pointer", className)}
      {...props}
    >
      {children}
      <div className="absolute left-1/2 top-full z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded bg-black px-4.5 py-1.5 text-sm font-medium text-white opacity-0 group-hover:opacity-100">
        <span className="absolute left-3/4 top-[-11px] z-10 h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm bg-black"></span>
        {text}
      </div>
    </div>
  );
}
