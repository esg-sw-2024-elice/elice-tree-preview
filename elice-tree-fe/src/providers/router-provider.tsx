import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Auth, Landing, NotFound, Todos } from '@/pages';
import AuthenticatedMainLayout from '@/components/shared/layout/AuthenticatedMainLayout';
import { useAuth } from '../hooks/use-auth';

export const KEYS_ROUTE = {
  BASE: '/',
  LANDING() {
    return this.BASE + 'landing';
  },
  TODOS() {
    return this.BASE + 'todos';
  },
  AUTH() {
    return this.BASE + 'auth';
  },
  NOT_FOUND() {
    return this.BASE + '404';
  },
  WILDCARD: '*',
};

function ProtectedRoutes({ isAuthenticated }: { isAuthenticated: boolean }) {
  if (!isAuthenticated) {
    return <Navigate to={KEYS_ROUTE.AUTH()} />;
  }
  return <Outlet />;
}

export function RouterProvider() {
  const { isAuthenticated } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={KEYS_ROUTE.BASE} element={<Navigate to={KEYS_ROUTE.LANDING()} />} />
        <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}>
          <Route element={<AuthenticatedMainLayout />}>
            <Route path={KEYS_ROUTE.LANDING()} element={<Landing />} />
            <Route path={KEYS_ROUTE.TODOS()} element={<Todos />} />
          </Route>
        </Route>
        <Route path={KEYS_ROUTE.AUTH()} element={<Auth />} />
        <Route path={KEYS_ROUTE.NOT_FOUND()} element={<NotFound />} />
        <Route path={KEYS_ROUTE.WILDCARD} element={<Navigate to={KEYS_ROUTE.NOT_FOUND()} />} />
      </Routes>
    </BrowserRouter>
  );
}
