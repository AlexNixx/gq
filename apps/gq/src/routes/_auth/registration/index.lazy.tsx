import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_auth/registration/')({
  component: () => <div>Hello /_auth/registration!</div>,
});
