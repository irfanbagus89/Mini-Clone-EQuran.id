import { Outlet } from 'react-router-dom';

export default function MyLayout({ children }) {
  return children ? children : <Outlet />;
}
