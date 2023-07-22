import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";

interface FriendCardProps {
  name: string;
  image: string;
}

export const FriendCard = ({ name, image }: FriendCardProps) => {
  const [message, setMessage] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  const handleMouseEnter = () => {
    setMessage(true);
  };
  const handleMouseLeave = () => {
    setMessage(false);
  };

  const handleDeleteFriend = async () => {
    await toast.promise(axiosPrivate.post(`/friends/deleteFriend/${name}`), {
      loading: "Deleting Friend",
      error: (err) => {
        if (err.status === 404) {
          return "Invalid Friend";
        } else {
          return "Server Error";
        }
      },
      success: (response) => {
        return "Deleted Successfully";
      },
    });
  };

  return (
    <>
      <div
        className="w-72 h-24 rounded-lg bg-gray-300 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-row items-center h-full px-4 justify-between">
          <div className="w-12 h-12 bg-red-400 rounded-full"></div>
          <div className="w-2/3">
            <span className="text-gray-800 font-bold font-roboto text-xl break-words">
              {name}
            </span>
          </div>
        </div>
        {message && (
          <div className="absolute top-0 ml-24 mt-16 w-52 bg-gray-300 p-4 rounded-lg shadow-2xl">
            <button
              onClick={() => toast.success("Coming Soon!")}
              className="px-4 py-2 mr-5 bg-blue-500 text-white rounded"
            >
              Chat
            </button>
            <button
              onClick={handleDeleteFriend}
              className="px-4 py-2 ml-2 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </>
  );
};
