'use client'

import { Button } from '@workspace/ui/components/button'
import { api } from '@workspace/backend/_generated/api'
import { useMutation, useQuery } from 'convex/react'

export default function Page() {
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
