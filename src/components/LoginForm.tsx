// src/components/LoginForm.tsx
import { useState } from 'react'

interface LoginFormProps {
  onSubmit: (email: string, password: string, remember: boolean) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError]       = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email.includes('@')) {
      setError('Por favor, insira um email válido.')
      return
    }
    if (password.length < 6) {
      setError('A password deve ter ao menos 6 caracteres.')
      return
    }
    onSubmit(email, password, remember)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold mb-4">Entrar</h2>

      {error && (
        <div className="mb-4 text-red-600 text-sm">
          {error}
        </div>
      )}

      <label htmlFor="email" className="block mb-1 text-sm font-medium">
        Email
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full px-3 py-2 mb-4 border rounded focus:outline-none focus:ring"
        required
      />

      <label htmlFor="password" className="block mb-1 text-sm font-medium">
        Password
      </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full px-3 py-2 mb-2 border rounded focus:outline-none focus:ring"
        required
      />

      <div className="flex items-center justify-between mb-6 text-sm">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={remember}
            onChange={e => setRemember(e.target.checked)}
            className="mr-2"
          />
          Lembrar-me
        </label>
        <button
          type="button"
          className="text-blue-600 hover:underline"
        >
          Esqueci a password
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Entrar
      </button>

      <div className="mt-6 text-center text-sm text-gray-500">
        Ou entra com
      </div>
      <div className="mt-3 flex justify-center gap-2">
        <button type="button" className="px-4 py-2 border rounded">
          Google
        </button>
        <button type="button" className="px-4 py-2 border rounded">
          Facebook
        </button>
        <button type="button" className="px-4 py-2 border rounded">
          GitHub
        </button>
      </div>
    </form>
  )
}
