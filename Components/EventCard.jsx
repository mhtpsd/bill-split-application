function EventCard({ event, onInputChange, onDelete, disabled }) {

    return (
      <div className="flex flex-col w-fit h-[200px] items-center justify-between text-xl my-5 p-2">
        
          <input className="w-fit text-center" type="text" value={event.eventName} onChange={(e) => onInputChange('eventName', e.target.value)} disabled={disabled}  />
        
        <label className="flex justify-between w-full">
          Amount:
          <input className="border-none" type="number" value={event.amount} onChange={(e) => onInputChange('amount', e.target.value)} disabled={disabled} />
        </label>
        <label className="flex justify-between w-full">
          Number of Heads:
          <input className="border-none ml-2" type="number" value={event.numberOfFriends} onChange={(e) => onInputChange('numberOfFriends', e.target.value)} disabled={disabled} />
        </label>
        <button className="bg-slate-50 w-[100px] h-[30px] rounded hover:bg-red-500 text-sm" onClick={onDelete} disabled={disabled}>Delete</button>
      </div>
    );
  }

  export default EventCard;