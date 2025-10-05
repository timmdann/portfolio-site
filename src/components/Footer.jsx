export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} timmdann. All rights reserved.
      </p>
    </footer>
  );
};
