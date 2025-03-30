"use client"

import { useState } from "react"

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-md mx-auto flex-1 flex flex-col items-center justify-center">
        {/* Logo */}
        <img src="/Logo.png" alt="AllResume.ai" className="w-32 mb-8" />

        {/* Sign Up Card */}
        <div className="w-full bg-white rounded-lg border border-gray-100 shadow-sm p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
            <p className="text-gray-600">
              Create an account to build your resumes.
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Name*
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-md bg-gray-50 border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

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
              Sign up
            </button>

            <button
              type="button"
              className="w-full border border-gray-300 py-3 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              Sign up with Google
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm">
              Already have an account?{" "}
              <a href="/login" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500">© 2025 AllResume.ai</div>
    </div>
  )
}
