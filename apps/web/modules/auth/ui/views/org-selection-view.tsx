import { OrganizationList } from '@clerk/nextjs'

const OrgSelector = () => {
  return (
    <OrganizationList afterCreateOrganizationUrl="/" afterSelectOrganizationUrl="/" skipInvitationScreen hidePersonal />
  )
}

export default OrgSelector
