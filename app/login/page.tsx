import React from "react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="bg-[#232336] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#00ff88]">
          Login to your account
        </h2>
        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded bg-[#181824] text-white border border-[#33334d] focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
              placeholder="example@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded bg-[#181824] text-white border border-[#33334d] focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#00ff88] text-[#232336] font-semibold rounded hover:bg-[#00cc6a] transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
