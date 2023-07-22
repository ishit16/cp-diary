import { toast } from "react-hot-toast";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";

interface RequestCardProps {
  name: string;
  image: string;
}

export const RequestCard = ({ name, image }: RequestCardProps) => {
  const axiosPrivate = useAxiosPrivate();

  const handleConfirm = async () => {
    try {
      await toast.promise(axiosPrivate.post(`/friends/acceptRequest/${name}`), {
        loading: "Accepting Request",
        error: (err) => {
          if (err.status === 400) {
            return "Invalid Request";
          } else {
            return "Failed to Accept Request";
          }
        },
        success: "Accepted Request",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await toast.promise(axiosPrivate.post(`/friends/deleteRequest/${name}`), {
        loading: "Deleting Request",
        error: (err) => {
          if (err.status === 404) {
            return "Invalid Request";
          } else {
            return "Internal Server Error";
          }
        },
        success: (response) => {
          return "Request Deleted Successfully";
        },
      });
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
