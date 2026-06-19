function MarkoVideoBackground({ className }: { className?: string }) {
  return <div className={className || "absolute h-[875px] left-0 top-[85.84px] w-[1860px]"} data-name="Marko Video Background 1" />;
}

export default function Iframe() {
  return (
    <div className="relative size-full" data-name="Iframe">
      <MarkoVideoBackground />
      <div className="absolute bg-[rgba(0,0,0,0.69)] h-[875px] left-0 top-[85.84px] w-[1860px]" data-name="Marko Video Background 2" />
    </div>
  );
}