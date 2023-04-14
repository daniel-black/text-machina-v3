export default function ScrollableContainer({
  children,
  height = 'h-full',
  classes = '',
}: {
  children: React.ReactNode,
  height?: string;
  classes?: string;
}) {
  return (
    <div className={`${height} ${classes} max-h-screen w-full overflow-auto`}>
      {children}
    </div>
  );
}