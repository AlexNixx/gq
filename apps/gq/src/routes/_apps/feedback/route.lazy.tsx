import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_apps/feedback')({
  component: () => <div>Hello /_apps/feedback!</div>,
});
