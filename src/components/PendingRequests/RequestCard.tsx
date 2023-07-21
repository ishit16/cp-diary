import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";

interface RequestCardProps {
  name: string;
  image: string;
}

export const RequestCard = ({ name, image }: RequestCardProps) => {
  const axiosPrivate = useAxiosPrivate();

  const handleConfirm = async () => {
    try {
      const response = await axiosPrivate.post(
        `/friends/acceptRequest/${name}`
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axiosPrivate.post(
        `/friends/deleteRequest/${name}`
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="w-60 h-44 rounded-lg bg-gray-300 flex flex-col ">
        <span className="mx-auto text-gray-800 font-bold py-4 font-roboto text-2xl break-words">
          {name}
        </span>
        <div className="flex flex-col gap-y-2 items-center">
          <button
            onClick={handleConfirm}
            className="w-4/5 bg-green-500 py-2 text-gray-200 px-2 rounded-md text-xl font-bold font-roboto"
          >
            Confirm
          </button>
          <button
            onClick={handleDelete}
            className="w-4/5 bg-red-500 py-2 px-2 text-gray-200 rounded-md text-xl font-bold font-roboto"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
