"use client"

import { useState } from 'react';

import EventCard from '@/Components/EventCard';

export default function Home() {

  const [events, setEvents] = useState([{ eventName: 'Event 1', amount: 0, numberOfFriends: 0 }]);
  const [splitAmounts, setSplitAmounts] = useState([]);
  const [isCalculated, setIsCalculated] = useState(false);

  const addEvent = () => {
    const newEvent = { eventName: `Event ${events.length + 1}`, amount: 0, numberOfFriends: 0 };
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (index) => {
    const newEvents = [...events];
    newEvents.splice(index, 1);
    setEvents(newEvents);
  };

  const calculateSplit = () => {
    const newSplitAmounts = events.map(event => event.amount / event.numberOfFriends);
    setSplitAmounts(newSplitAmounts);
    setIsCalculated(true);
  };

  const reset = () => {
    setEvents([{ eventName: 'Event 1', amount: 0, numberOfFriends: 0 }]);
    setSplitAmounts([]);
    setIsCalculated(false);
  };

  const handleInputChange = (index, field, value) => {
    const newEvents = [...events];
    newEvents[index][field] = value;
    setEvents(newEvents);
  };

  return (
    <div className="w-full h-full flex flex-col items-center my-10">
      <div className="w-full h-12 flex items-center justify-center">
        <h1 className='text-2xl cursor-default' onClick={reset}>Bill Split Application</h1>
      </div>
      <hr className='w-full'/>
      <div className='w-fit'>
      {events.map((event, index) => (<>
        <EventCard key={index} event={event} onInputChange={(field, value) => handleInputChange(index, field, value)} onDelete={() => deleteEvent(index)} disabled={isCalculated} />
        <hr/>
        </>
      ))}

      </div>
      <button className='bg-slate-50 mt-4 w-[200px] h-[30px] rounded hover:bg-green-400' onClick={addEvent}>Add Event</button>
      <button className='bg-slate-50 mt-4 w-[300px] h-[40px] rounded hover:bg-black hover:text-white relative' onClick={calculateSplit}>Calculate</button>
          <div className='w-[500px] p-5 flex flex-col items-center justify-between'>
              <hr className='w-[500px]'/>
            {splitAmounts.map((amount, index) => (
                <p className='text-2xl' key={index}>{events[index].eventName}: Per head: {amount}</p>
            ))}
          </div>
          {isCalculated && <button className='bg-slate-50 mt-4 w-[200px] h-[30px] rounded hover:bg-blue-500' onClick={reset}>New</button>}
    </div>
  );
}
