"use client"

import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-md mx-auto flex-1 flex flex-col items-center justify-center">
        {/* Logo */}
        <img src="/Logo.png" alt="AllResume.ai" className="w-32 mb-8" />

        {/* Login Card */}
        <div className="w-full bg-white rounded-lg border border-gray-100 shadow-sm p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">Log In</h1>
            <p className="text-gray-600">
              Access your account to manage your resumes and job applications.
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email*
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md bg-blue-50 border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password*
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md bg-blue-50 border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-4 rounded-md font-medium"
            >
              Log in
            </button>

            <button
              type="button"
              className="w-full border border-gray-300 py-3 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              Log in with Google
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm">
              Don’t have an account?{" "}
              <a href="/signup" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500">© 2025 AllResume.ai</div>
    </div>
  )
}
