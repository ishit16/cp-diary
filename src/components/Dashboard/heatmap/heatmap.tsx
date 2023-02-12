export const Heatmap = (props: any) => {
  return (
    <>
      <div className="bg-slate-800 flex flex-row justify-between w-auto bg-opacity-50 shadow-md px-3 py-4">
        <div>
          <p className="text-white font-bold text-2xl">
            Total Number of Submissions: {props.submissions}
          </p>
        </div>
        <div>
          <p className="text-white font-bold text-2xl">Calender</p>
        </div>
      </div>
    </>
  );
};
