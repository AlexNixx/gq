import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_menu/menu')({
  component: () => <div>Hello /_menu/menu!</div>,
});
