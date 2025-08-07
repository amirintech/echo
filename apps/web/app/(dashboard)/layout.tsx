import AuthGuard from '@/modules/auth/ui/components/auth-guard'
import OrgGuard from '@/modules/auth/ui/components/org-guard'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <AuthGuard>
      <OrgGuard>{children}</OrgGuard>
    </AuthGuard>
  )
}

export default Layout
