function EventCard({ eventName, amount, numberOfFriends, onDelete }) {
    return (
      <div className="flex flex-col w-fit h-[200px] items-center justify-between text-xl my-5 p-2">
        <label className="flex justify-between w-full">
          {eventName}:
          <input type="text" value={eventName} />
        </label>
        <label className="flex justify-between w-full">
          Amount:
          <input type="number" value={amount} />
        </label>
        <label className="flex justify-between w-full">
          Number of Friends:
          <input type="number" value={numberOfFriends} />
        </label>
        <button className="bg-slate-50 w-[100px] h-[30px] rounded hover:bg-red-500 text-sm" onClick={onDelete}>Delete</button>
      </div>
    );
  }

  export default EventCard;