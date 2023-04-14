export default function ScreenContainer({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen w-full flex flex-col sm:flex-row">
      {/* Intended to be used with a responsive navbar and a main body */}
      {children}
    </div>
  );
}