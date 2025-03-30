import React, { ReactNode } from "react"

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-md mx-auto flex-1 flex flex-col items-center justify-center">
        {/* 로고 */}
        <img src="/Logo.png" alt="AllResume.ai Logo" className="w-32 mb-8" />

        {/* 카드 영역 */}
        <div className="w-full bg-white rounded-lg border border-gray-100 shadow-sm p-8">
          {children}
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500">© 2025 AllResume.ai</div>
    </div>
  )
} 