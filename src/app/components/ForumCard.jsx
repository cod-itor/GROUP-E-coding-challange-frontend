export default function ForumCard({ title, description, tags, author, isActive }) {
  return (
    <div className={`
      bg-white p-5 rounded-2xl border border-gray-100 transition-all duration-300
      ${isActive ? 'shadow-2xl scale-105 z-10 opacity-100' : 'shadow-md scale-95 opacity-40'}
    `}>
      <p className="text-[10px] text-gray-400 font-medium mb-1">Topic</p>
      <h4 className="text-[#004d8c] font-bold text-sm mb-2">{title}</h4>
      <p className="text-[10px] text-gray-500 line-clamp-2 mb-3">{description}</p>
      
      <div className="flex gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="bg-slate-50 text-slate-400 text-[10px] px-2 py-1 rounded">#{tag}</span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center  gap-2">          
          <div
           className="flex gap-1 justify-center align-middle flex-row text-[9px] text-gray-400">
            <span>• Asked by </span>
            <div className="w-5 h-5 rounded-full bg-blue-100 border border-blue-200" />
            <b className="text-gray-600">{author}</b>
          </div>
          
        </div>
        <button className="bg-[#004d8c] text-white text-[10px] px-3 py-1.5 rounded-md font-medium">
          View Answer (10)
        </button>
      </div>
    </div>
  );
}