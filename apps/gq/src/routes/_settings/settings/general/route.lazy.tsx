import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_settings/settings/general')({
  component: () => <div>Hello /_settings/settings/general!</div>
})