import { createFileRoute, Navigate } from '@tanstack/react-router';

import { RoutesEnum } from '@gq/types';

export const Route = createFileRoute('/')({
  component: () => <Navigate to={RoutesEnum.Dashboard} />
});
