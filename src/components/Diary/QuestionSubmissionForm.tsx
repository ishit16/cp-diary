import { useState } from "react";
import { useAuthState } from "../../api/signState";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "../../api/axios";
import { refreshPageNotify } from "../toasters/toasts";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { problemCardData } from "../../api/problemAtom";

export const QuestionSubmissionForm = ({ openForm, setOpen }: any) => {
  const [cardData, setCardData] = useRecoilState(problemCardData);
  const [formData, setFormData] = useState({
    problemName: " ",
    problemLink: " ",
    problemCategory: " ",
  });
  const authInfo = useRecoilValue(useAuthState);
  const axiosPrivate = useAxiosPrivate();

  const handleFormChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // @ts-ignore
    try {
      const response = await axiosPrivate.post("/questions", formData);
      //@ts-ignore
      setCardData([...cardData, response.data]);
    } catch (err) {
      console.log(err);
    }
    setOpen(!openForm);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Save New Problem</h3>
            </div>
            <div className="relative p-6 flex-auto">
              <form>
                <div className="mb-6">
                  <input
                    name="problemName"
                    id="problemName"
                    onChange={handleFormChange}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Problem Name"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    name="problemLink"
                    id="problemLink"
                    onChange={handleFormChange}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Problem Link"
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <select
                    id="problemCategory"
                    onChange={handleFormChange}
                    name="problemCategory"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  >
                    <option value=" " className="text-gray-700">
                      Problem Category
                    </option>
                    <option value="Dynamic Programming">
                      Dynamic Programming
                    </option>
                    <option value="Trees">Trees</option>
                    <option value="Graphs">Graphs</option>
                    <option value="Ad-HOC">Ad-HOC</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setOpen(!openForm)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleSubmit}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
