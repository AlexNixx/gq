import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_settings/settings/appearance')({
  component: () => <div>Hello /_settings/settings/appearance!</div>
})