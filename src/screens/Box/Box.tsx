import React from "react";
import { MainSection } from "./sections/MainSection/MainSection";
import { MobileViewSection } from "./sections/MobileViewSection/MobileViewSection";

export const Box = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen">
      {/* Desktop View - Hidden on mobile (below md breakpoint) */}
      <div className="hidden md:block">
        <MainSection />
      </div>

      {/* Mobile View - Shown only on mobile (below md breakpoint) */}
      <div className="block md:hidden">
        <MobileViewSection />
      </div>
    </div>
  );
};