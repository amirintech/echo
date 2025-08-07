'use client'

import { useOrganization } from '@clerk/nextjs'
import OrgSelectionView from '../views/org-selection-view'
import CenterLayout from '@workspace/ui/components/shared/center-layout'

type Props = {
  children: React.ReactNode
}

const OrgGuard = ({ children }: Props) => {
  const { organization } = useOrganization()

  if (!organization)
    return (
      <CenterLayout>
        <h1>Hey</h1>
        <OrgSelectionView />
      </CenterLayout>
    )

  return <>{children}</>
}

export default OrgGuard
