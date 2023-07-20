import { FriendCard } from "./FriendCard";
import { SearchBar } from "./SearchBar";
import chat from "../../assets/chat.png";
import { SearchBarLists } from "./SearchLists";
import { useEffect, useState } from "react";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useRecoilValue } from "recoil";
import { useAuthState } from "../../api/signState";

interface Friend {
  id: string;
  name: string;
  image: string;
}

export const FriendsContainer = () => {
  const [friends, setFriends] = useState(Array<Friend>);
  const axiosPrivate = useAxiosPrivate();
  const auth = useRecoilValue(useAuthState);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const response = await axiosPrivate.get("/friends/allFriends");
        console.log(response.data);
        console.log(auth);
        if (response.data.message == "You have no friends yet.") {
          setFriends([]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, []);

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
          {friends.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-100 text-3xl font-roboto font-bold">
                No friends found
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 my-12 place-items-center">
              {friends.map((friend) => (
                <FriendCard
                  key={friend.name}
                  name={friend.name}
                  image={friend.image}
                />
              ))}
            </div>
          )}
        </div>
        <div className="w-12 h-12 my-2 ml-auto bg-white rounded-full items-center justify-center flex shadow-2xl">
          <img src={chat} alt="chat" />
        </div>
      </div>
    </>
  );
};
