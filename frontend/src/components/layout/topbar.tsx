export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-white/5 px-8 backdrop-blur-xl">
      <div>
        <h2 className="text-2xl font-semibold">
          Healthcare Intelligence Platform
        </h2>
      </div>

      <div className="h-10 w-10 rounded-full bg-blue-500" />
    </header>
  );
}