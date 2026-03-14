import { Link } from "react-router";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-8xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="text-muted-foreground max-w-sm">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 rounded-full border border-border text-foreground hover:text-primary hover:border-primary transition-colors duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};
