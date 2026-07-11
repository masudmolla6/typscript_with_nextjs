import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
};

export default function Title({ children }: TitleProps) {
  return (
    <div className="flex flex-col items-center gap-4 mb-12">
      {/* Top Badge */}
      <div className="h-1 w-20 rounded-full bg-primary"></div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-center text-base-content leading-tight">
        {children}
      </h2>

      {/* Bottom Decoration */}
      <div className="flex items-center gap-2">
        <span className="h-[2px] w-12 bg-primary rounded-full"></span>
        <span className="w-3 h-3 rounded-full bg-primary"></span>
        <span className="h-[2px] w-12 bg-primary rounded-full"></span>
      </div>
    </div>
  );
}