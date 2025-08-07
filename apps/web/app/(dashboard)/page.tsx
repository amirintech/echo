import { OrganizationSwitcher, SignOutButton } from '@clerk/nextjs'
import { Button } from '@workspace/ui/components/button'

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello Web</h1>
        <Button size="sm">Button</Button>
        <OrganizationSwitcher />
        <SignOutButton>
          <Button size="sm">Sign Out</Button>
        </SignOutButton>
      </div>
    </div>
  )
}
