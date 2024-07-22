// ./PrivateRoute.tsx

import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './auth';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;