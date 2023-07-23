import { toast } from "react-hot-toast";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";

interface SearchBarResultProps {
  id: string;
  name: string;
  isFriend: boolean;
}

export const SearchBarResult = ({
  name,
  isFriend,
  id,
}: SearchBarResultProps) => {
  const axiosPrivate = useAxiosPrivate();
  const sendFriendRequest = async () => {
    try {
      console.log();
      await toast.promise(axiosPrivate.post(`/friends/sendRequest/${name}`), {
        loading: "Sending Friend Request",
        success: (response) => {
          if (response.status === 204) {
            return "Friend Request Already Sent!";
          } else if (response.status === 208) {
            return "Friends Already";
          } else {
            return "Friend Request Sent Successfully";
          }
        },
        error: "Internal Server Error",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full flex flex-row py-3 px-8 justify-between">
        <span className="font-roboto font-bold text-xl text-gray-200">
          {name}
        </span>
        {!isFriend && (
          <button
            onClick={sendFriendRequest}
            className="p-2 font-roboto text-gray-700 font-bold rounded-md bg-green-200"
          >
            Add Friend
          </button>
        )}
      </div>
    </>
  );
};
