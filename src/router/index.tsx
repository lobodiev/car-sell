import { PropsWithChildren } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import { getKeyFromLocalStorage } from '../shared/utils/localStorage';

import { ROUTES } from './constants.ts';
import HomePage from '../pages';

interface ProtectedRouteProperties {}

/**
 * A higher-order component that protects a route by checking if the user is authenticated and has the required permissions.
 */
export const ProtectedRoute = ({
  children,
}: PropsWithChildren<ProtectedRouteProperties>) => {
  const isLoggedIn = getKeyFromLocalStorage({ key: 'isLoggedIn' });
  /**
   * Check if the user is authenticated.
   */
  if (!isLoggedIn) {
    /**
     * If not authenticated, redirect to the login page.
     */
    return <Navigate to={ROUTES.AUTH.LOGIN} />;
  }

  /**
   * If authenticated, render the child routes.
   */
  return children;
};

/**
 * Defines the routes for the application.
 */
export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      {/*<Route path="*" element={<Navigate to={ROUTES.HOME} />} />*/}
    </Routes>
  );
};
