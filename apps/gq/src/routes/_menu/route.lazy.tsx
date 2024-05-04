import { createLazyFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_menu')({
  component: () => <MenuComponent />,
});

const MenuComponent = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
