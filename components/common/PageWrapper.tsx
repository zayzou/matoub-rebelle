interface PageWrapperProps {
  children: React.ReactNode;
  wide?: boolean;
}

export function PageWrapper({ children, wide = false }: PageWrapperProps) {
  return (
    <div
      className={`mx-auto px-4 sm:px-6 py-10 ${wide ? "max-w-7xl" : "max-w-4xl"}`}
    >
      {children}
    </div>
  );
}
