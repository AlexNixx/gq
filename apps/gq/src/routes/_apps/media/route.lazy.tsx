import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_apps/media')({
  component: () => <div>Hello /_apps/media!</div>,
});
