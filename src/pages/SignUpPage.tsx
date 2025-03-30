"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

function SignUpPage() {
  const [email, setEmail] = useState("cathyjoo0305@kookmin.ac.kr")
  const [password, setPassword] = useState("•••••••")

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-50 py-8">
      <div className="w-full max-w-md mx-auto flex-1 flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          </div>
          <span className="font-medium text-black">AllResume.ai</span>
        </div>

        {/* Sign Up Card */}
        <div className="w-full bg-white rounded-lg border border-gray-100 shadow-sm p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
            <p className="text-gray-600">Lorem ipsum dolor sit amet adipiscing elit.</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Name*
              </label>
              <input 
                id="name" 
                type="text" 
                className="w-full rounded-md bg-gray-50 border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
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
                className="w-full rounded-md bg-blue-50 border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                className="w-full rounded-md bg-blue-50 border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path
                    fill="#4285F4"
                    d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                  />
                  <path
                    fill="#34A853"
                    d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                  />
                </g>
              </svg>
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

export default SignUpPage

