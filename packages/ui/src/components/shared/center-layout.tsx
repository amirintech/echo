type Props = {
  children: React.ReactNode
}

const CenterLayout = ({ children }: Props) => {
  return <div className="flex min-h-screen w-full items-center justify-center">{children}</div>
}

export default CenterLayout