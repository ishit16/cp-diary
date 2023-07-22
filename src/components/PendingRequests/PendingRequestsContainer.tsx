import { useEffect, useState } from "react";
import { RequestCard } from "./RequestCard";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import toast from "react-hot-toast";
interface friends {
  name: string;
  image: "ishit";
}

export const PendingRequestsContainer = () => {
  const axiosPrivate = useAxiosPrivate();
  const [pendingRequests, setPendingRequests] = useState(Array<friends>);

  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        const response = await axiosPrivate.get("/friends/pendingRequests");
        const friendsList = response.data.pendingRequests; // Assuming the API response has a field named "pendingRequests" containing the array of usernames

        const updatedPendingRequests: friends[] = friendsList.map(
          (username: string) => ({
            name: username,
            image: "ishit",
          })
        );

        setPendingRequests(updatedPendingRequests);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPendingRequests();
  }, [pendingRequests]);

  const handleConfirm = async (name: String) => {
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
      const updatedPendingRequests = pendingRequests.filter(
        (friend) => friend.name !== name
      );
      setPendingRequests(updatedPendingRequests);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (name: String) => {
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

      const updatedPendingRequests = pendingRequests.filter(
        (friend) => friend.name !== name
      );
      setPendingRequests(updatedPendingRequests);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex-col w-full px-4 md:px-20">
        <div className="flex flex-row mx-auto mt-20 gap-x-12 py-4">
          <div className="w-full py-2">
            <span className="text-gray-300 text-4xl font-bold font-category-heading">
              Pending Requests
            </span>
          </div>
        </div>
        <div className="w-full mx-auto rounded-md h-2/3 bg-slate-600 bg-opacity-50 overflow-y-auto">
          {pendingRequests.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-100 text-3xl font-roboto font-bold">
                No pending requests found!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 my-12 place-items-center">
              {pendingRequests.map((friend) => (
                <RequestCard
                  key={friend.name}
                  name={friend.name}
                  image={friend.image}
                  onAccept={() => handleConfirm(friend.name)}
                  onDelete={() => handleDelete(friend.name)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
