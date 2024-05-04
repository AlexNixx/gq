import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_settings/settings/policies')({
  component: () => <div>Hello /_settings/settings/policies!</div>
})