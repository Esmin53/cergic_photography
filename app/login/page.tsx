'use client';

import { useState, useTransition } from 'react';
import { loginAction } from './actions';

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const res = await loginAction(formData);
      if (res?.error) {
        setError(res.error);
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 dark">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-foreground p-6 rounded-lg shadow-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-text">Admin Login</h1>

        {error && <div className="p-3 bg-red-100 text-red-600 rounded text-sm">{error}</div>}

        <div>
          <label className="block text-sm font-medium text-text">Name</label>
          <input
            name="name"
            required
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-text"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text">Password</label>
          <input
            type="password"
            name="password"
            required
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-text"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-[#0E8388] text-text py-2 rounded font-medium hover:bg-[#0c6e72] disabled:opacity-50 coursor-pointer"
        >
          {isPending ? 'Logging in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}