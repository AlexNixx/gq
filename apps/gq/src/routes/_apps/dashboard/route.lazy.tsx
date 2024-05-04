import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_apps/dashboard')({
  component: () => <div>Hello /_apps/dashboard!</div>,
});
