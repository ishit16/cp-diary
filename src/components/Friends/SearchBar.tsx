import { cva } from "class-variance-authority";
import { useEffect, useRef, useState } from "react";
import { SearchBarResult } from "./SearchBarResult";
import { debounce } from "lodash";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";

interface User {
  id: string;
  name: string;
  isFriend: boolean;
}

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState<Array<User>>([]);
  const axiosPrivate = useAxiosPrivate();

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleCloseSearch = () => {
    setSearchInput("");
    setUsers([]);
  };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const search = { searchInput };
        const response = await axiosPrivate.post("/users", search);

        if (response.status === 204) {
          console.log(users.length);
          setUsers([]);
        } else {
          const data = response.data;
          const filteredData = data.map((item: any) => ({
            id: item._id,
            name: item.username,
            isFriend: false,
          }));
          setUsers(filteredData);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (searchInput != "") {
      const debouncedFetch = debounce(fetchResults, 2000);
      debouncedFetch();
    } else {
      setUsers([]);
    }
  }, [searchInput]);

  return (
    <div>
      <form>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-3 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleCloseSearch}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            className={SearchBarInputStyles()}
          />
        </div>
      </form>
      <div className="w-[41.5%] rounded-md mt-2 bg-slate-800 z-100 fixed max-h-40 overflow-y-auto">
        {users.map((user) => (
          <SearchBarResult
            key={user?.id}
            id={user?.id}
            name={user?.name}
            isFriend={user?.isFriend}
          />
        ))}
      </div>
    </div>
  );
};

const SearchBarInputStyles = cva([
  "w-full",
  "border-slate-600",
  "border-2",
  "py-4",
  "pl-12",
  "pr-4",
  "text-gray-500",
  "rounded-md",
  "bg-slate-800",
  "focus:bg-slate-800",
]);
