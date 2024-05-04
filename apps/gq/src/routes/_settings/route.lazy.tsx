import { createLazyFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_settings')({
  component: () => <SettingsRootLayout />,
});

const SettingsRootLayout = () => (
  <>
    <Outlet />
  </>
);
