function EventCard({ eventName, amount, numberOfFriends }) {
    return (
      <div className="flex flex-col bg-slate-50 w-fit h-[200px] items-center justify-between top-20 relative text-xl">
        <label className="flex justify-between w-full">
          Event Name:
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
        <button>Delete</button>
      </div>
    );
  }

  export default EventCard;