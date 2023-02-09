import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => {
          const wrappedPage = <div className="page-wrapper">{element}</div>;

          return (
            <Route
              key={path}
              path={path}
              element={wrappedPage}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
}
export default AppRouter;
