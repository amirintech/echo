import CenterLayout from '@workspace/ui/components/shared/center-layout'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return <CenterLayout>{children}</CenterLayout>
}

export default Layout
