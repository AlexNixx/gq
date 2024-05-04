import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_settings/settings/business-profile')({
  component: () => <div>Hello /_settings/settings/business-profile!</div>
})