import React from "react";

export default function TopHelperComponent() {
  const users = [
    { id: 1, name: "Ty Dine", points: 1200, answers: 48 },
    { id: 2, name: "Heav Seima", points: 980, answers: 48 },
    { id: 3, name: "Chhim Pojim", points: 870, answers: 48 },
  ];
  return (
    <div className="w-90">
      <div className=" mt-3 bg-white py-4 rounded-2xl shadow px-6 ">
        <div className="flex justify-between ">
          <div className="text-[18px] flex gap-1 font-bold">
            <h1 className="text-[#00518E] ">Top</h1>
            <h1 className="text-[#011B3E]">Helper</h1>
          </div>
          <button className="text-[12px] text-[#00518E] ">See All</button>
        </div>
        <div className="mt-5">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

function UserCard({ user }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>

      <div>
        <p className="font-medium text-[#00518E]">{user.name}</p>
        <div className="flex gap-2 items-center">
          <p className="text-xs text-gray-500 ">{user.points} points</p>
          <span className="text-gray-400">•</span>
          <p className="text-xs text-gray-500">{user.answers} answers</p>
        </div>
      </div>
    </div>
  );
}
