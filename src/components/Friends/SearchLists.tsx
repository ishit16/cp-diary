import { SearchBarResult } from "./SearchBarResult";

export const SearchBarLists = () => {
  const users = [
    { id: 1, name: "Ishit", isFriend: false },
    { id: 2, name: "Devang", isFriend: false },
    { id: 3, name: "Devaansh", isFriend: false },
    { id: 4, name: "Sunandinee", isFriend: false },
  ];

  return (
    <>
      <div className="w-[41.5%] rounded-md mt-2 bg-slate-800 z-100 fixed max-h-40 overflow-y-auto">
        {users.map((user) => (
          <SearchBarResult
            key={user.id}
            name={user.name}
            isFriend={user.isFriend}
          />
        ))}
      </div>
    </>
  );
};
