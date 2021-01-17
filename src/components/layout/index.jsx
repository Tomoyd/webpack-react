import { Suspense, useEffect } from "react";

const Layout = ({ fb = null, children, title, className = null }) => {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <Suspense fallback={fb}>
      <div className={className}>{children}</div>
    </Suspense>
  );
};

export default Layout;
