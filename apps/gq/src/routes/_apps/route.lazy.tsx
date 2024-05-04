import { createLazyFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_apps')({
  component: () => <AppsRootLayout />,
});

const AppsRootLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
