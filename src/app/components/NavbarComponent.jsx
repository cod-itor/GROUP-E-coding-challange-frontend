export default function Navbar() {
  return (
    <div className="flex items-center gap-3 mb-12">
      <div className="w-10 h-10 bg-[#004d8c] rounded-lg shadow-md flex items-center justify-center p-1.5">
        <div className="w-full h-full border-2 border-white/30 rounded-sm relative">
          <div className="absolute inset-1 bg-white/20 rounded-full" />
        </div>
      </div>
      <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">
        HRD Community
      </h2>
    </div>
  );
}