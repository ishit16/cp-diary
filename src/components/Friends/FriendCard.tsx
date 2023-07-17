interface FriendCardProps {
  name: string;
  image: string;
}

export const FriendCard = ({ name, image }: FriendCardProps) => {
  return (
    <>
      <div className="w-72 h-24 rounded-lg bg-gray-300">
        <div className="flex flex-row items-center h-full px-4 justify-between">
          <div className="w-12 h-12 bg-red-400 rounded-full"></div>
          <div className="w-2/3">
            <span className="text-gray-800 font-bold font-roboto text-xl break-words">
              Ishit Garg
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
