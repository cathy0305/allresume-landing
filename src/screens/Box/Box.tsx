import React from "react";
import { Link } from "react-router-dom";

// MainSection과 MobileViewSection 컴포넌트 타입 수정
import { MainSection } from "./sections/MainSection/MainSection";
import { MobileViewSection } from "./sections/MobileViewSection/MobileViewSection";

export const Box = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Navigation 버튼 */}
      <div className="w-full flex justify-end p-4 gap-4">
        <Link
          to="/login"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          Sign Up
        </Link>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <MainSection />
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <MobileViewSection />
      </div>
    </div>
  );
};
