import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_settings/settings/business-information')({
  component: () => <div>Hello /_settings/settings/business-information!</div>
})