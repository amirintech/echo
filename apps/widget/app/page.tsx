'use client'

import { Button } from '@workspace/ui/components/button'
import { api } from '@workspace/backend/_generated/api'
import { useMutation, useQuery } from 'convex/react'
import { useVapi } from '@/modules/widget/hooks/use-vapi'

export default function Page() {
  const { startCall, stopCall, messages, isConnecting, isConnected, isSpeaking } = useVapi()
  const users = useQuery(api.users.list)
  const createUser = useMutation(api.users.create)
  console.log(users)
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello Widget</h1>
        <Button size="sm" onClick={() => createUser({ name: 'John Doe', email: 'john.doe@example.com' })}>
          Create User
        </Button>

        <Button size="sm" onClick={() => startCall()}>
          Start Call
        </Button>
        <Button size="sm" onClick={() => stopCall()}>
          End Call
        </Button>

        <div>
          <p>Is Connecting: {isConnecting ? 'Yes' : 'No'}</p>
          <p>Is Connected: {isConnected ? 'Yes' : 'No'}</p>
          <p>Is Speaking: {isSpeaking ? 'Yes' : 'No'}</p>
        </div>

        <div>
          <pre>{JSON.stringify(messages, null, 2)}</pre>
        </div>

        <div>
          {users?.map(user => (
            <div key={user._id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
