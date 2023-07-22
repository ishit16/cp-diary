import { toast } from "react-hot-toast";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";

interface RequestCardProps {
  name: string;
  image: string;
  onAccept: () => void;
  onDelete: () => void;
}

export const RequestCard = ({
  name,
  image,
  onAccept,
  onDelete,
}: RequestCardProps) => {
  return (
    <>
      <div className="w-60 h-44 rounded-lg bg-gray-300 flex flex-col ">
        <span className="mx-auto text-gray-800 font-bold py-4 font-roboto text-2xl break-words">
          {name}
        </span>
        <div className="flex flex-col gap-y-2 items-center">
          <button
            onClick={onAccept}
            className="w-4/5 bg-green-500 py-2 text-gray-200 px-2 rounded-md text-xl font-bold font-roboto"
          >
            Confirm
          </button>
          <button
            onClick={onDelete}
            className="w-4/5 bg-red-500 py-2 px-2 text-gray-200 rounded-md text-xl font-bold font-roboto"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
