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
      const response = await axiosPrivate.post(`/friends/sendRequest/${name}`);
      console.log(response.data);
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
