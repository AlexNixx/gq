import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_apps/analytics')({
  component: () => <div>Hello /_apps/analytics!</div>
})