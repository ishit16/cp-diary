import { FriendCard } from "./FriendCard";
import { SearchBar } from "./SearchBar";
import chat from "../../assets/chat.png";
import { SearchBarLists } from "./SearchLists";
export const FriendsContainer = () => {
  return (
    <>
      <div className="flex-col w-full px-4 md:px-20">
        <div className="flex flex-row mx-auto mt-20 gap-x-12 py-4">
          <div className="w-1/2 py-2">
            <span className="text-gray-300 text-4xl font-bold font-category-heading">
              Friends List
            </span>
          </div>
          <div className="flex flex-col w-1/2">
            <div>
              <SearchBar />
            </div>
          </div>
        </div>
        <div className="w-full mx-auto rounded-md h-2/3 bg-slate-600 bg-opacity-50 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 my-12 place-items-center">
            <FriendCard name={"Ishit Garg"} image={"ishit16"} />
            <FriendCard name={"Ishit Garg"} image={"ishit16"} />
            <FriendCard name={"Ishit Garg"} image={"ishit16"} />
            <FriendCard name={"Ishit Garg"} image={"ishit16"} />
            <FriendCard name={"Ishit Garg"} image={"ishit16"} />
            <FriendCard name={"Ishit Garg"} image={"ishit16"} />
            <FriendCard name={"Ishit Garg"} image={"ishit16"} />
            <FriendCard name={"Ishit Garg"} image={"ishit16"} />
            <FriendCard name={"Ishit Garg"} image={"ishit16"} />
            <FriendCard name={"Ishit Garg"} image={"ishit16"} />
            <FriendCard name={"Ishit Garg"} image={"ishit16"} />
          </div>
        </div>
        <div className="w-12 h-12 my-2 ml-auto bg-white rounded-full items-center justify-center flex shadow-2xl">
          <img src={chat} alt="chat" />
        </div>
      </div>
    </>
  );
};
