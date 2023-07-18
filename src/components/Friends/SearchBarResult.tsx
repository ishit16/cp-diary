interface SearchBarResultProps {
  name: string;
  isFriend: boolean;
}

export const SearchBarResult = ({ name, isFriend }: SearchBarResultProps) => {
  return (
    <>
      <div className="w-full flex flex-row py-3 px-8 justify-between">
        <span className="font-roboto font-bold text-xl text-gray-200">
          {name}
        </span>
        {!isFriend && (
          <button className="p-2 font-roboto text-gray-700 font-bold rounded-md bg-green-200">
            Add Friend
          </button>
        )}
      </div>
    </>
  );
};
