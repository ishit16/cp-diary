import { useRecoilState } from "recoil";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { problemCardData } from "../../api/problemAtom";
import { useState } from "react";
import { toast } from "react-hot-toast";

export const QuestionSpecificsForm = ({
  openForm,
  setOpen,
  problemName,
  questionID,
  questionLink,
}: any) => {
  const [cardData, setCardData] = useRecoilState(problemCardData);
  const [openNotesForm, setOpenNotesForm] = useState(false);
  const [formData, setFormData] = useState({ problemNote: "" });

  const axiosPrivate = useAxiosPrivate();

  const handleFormChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const deleteProblem = async () => {
    try {
      const response = await axiosPrivate.delete(`/questions/${questionID}`);
      //@ts-ignore
      const updatedCardData = cardData.filter(
        //@ts-ignore
        (card) => card._id !== questionID
      );
      setCardData(updatedCardData);
    } catch (err) {
      console.log(err);
    }
    setOpen(!openForm);
  };

  const updateProblem = async (event: any) => {
    event?.preventDefault();
    try {
      await toast.promise(
        axiosPrivate.put(`/questions/${questionID}`, formData),
        {
          loading: "Loading",
          success: (response) => {
            const note = response.data.problemNote;
            //@ts-ignore
            const index = cardData.findIndex((card) => card._id === questionID);
            const newCardData = [...cardData];
            //@ts-ignore
            newCardData[index] = { ...newCardData[index], problemNote: note };
            setCardData(newCardData);
            return "Updated Successfully";
          },
          error: "Server Error",
        }
      );
      setOpen(!openForm);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Details</h3>
              <button
                className="text-red-500 hover:text-red-700 absolute top-0 right-0 mt-3 mr-3"
                onClick={() => setOpen(!openForm)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b gap-y-2">
              <button
                className="w-full bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={deleteProblem}
              >
                Delete Problem
              </button>
              <form>
                <div className="mb-2">
                  <textarea
                    name="problemNote"
                    id="note"
                    onChange={handleFormChange}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Max Characters 250"
                    autoComplete="off"
                    maxLength={250}
                    required
                  ></textarea>
                </div>
                <button
                  className="w-full bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={updateProblem}
                >
                  Publish Note
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
