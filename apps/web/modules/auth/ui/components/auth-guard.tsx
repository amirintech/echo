'use client'

import { Authenticated, Unauthenticated, AuthLoading } from 'convex/react'
import SignInView from '../views/sign-in-view'

type Props = {
  children: React.ReactNode
  loadingSkeleton?: React.ReactNode
}

const AuthGuard = ({ children, loadingSkeleton }: Props) => {
  return (
    <>
      <AuthLoading>{loadingSkeleton || <p>Loading...</p>}</AuthLoading>

      <Unauthenticated>
        <SignInView />
      </Unauthenticated>

      <Authenticated>{children}</Authenticated>
    </>
  )
}

export default AuthGuard
