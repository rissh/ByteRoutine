//

//
// see https://erdos.sdslabs.co/users
// see https://erdos.sdslabs.co/users
export const LeaderBoard = ({}: {
  leaderboard: { image: string; name: string; points: number }[];
}) => {
  const data = [
    { id: 1, icon: "", name: "Rishikesh", points: 23 },
    { id: 2, icon: "", name: "Nikhil", points: 43 },
    { id: 3, icon: "", name: "Omkar", points: 31 },
    { id: 4, icon: "", name: "Nilesh", points: 13 },
    { id: 5, icon: "", name: "Hrutu", points: 23 },
    { id: 6, icon: "", name: "Ram", points: 34 },
    { id: 7, icon: "", name: "Aniket", points: 24 },
  ];
  return (
    <div className="my-8">
      <h1 className="text-bold text-4xl">Leaderboards</h1>
      <div className="shadow-md my-4 mih-h-[50vh] px-4 py-4">
        <div className="flex my-8">
          <div className="w-1/3">Id</div>
          <div className="w-1/3">Name</div>
          <div className="w-1/3">Points</div>
        </div>
        {data.map((item) => (
          <div className="flex my-4 text-lg bg-white shadow-sm py-4 px-2">
            <div className="w-1/3">{item.id}</div>
            <div className="w-1/3">{item.name}</div>
            <div className="w-1/3">{item.points}</div>
          </div>
        ))}
        <div className="flex"></div>
      </div>
    </div>
  );
};
