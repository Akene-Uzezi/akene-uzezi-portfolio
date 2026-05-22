import type { SVGAttributes } from "react";

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-2xl font-bold tracking-tight">
        Akene Uzezi
      </span>
    </div>
  );
};

export default Logo;