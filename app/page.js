"use client"

import { useState } from 'react';

import EventCard from '@/Components/EventCard';
import Link from 'next/link'

export default function Home() {

  const [events, setEvents] = useState([{ eventName: 'Event 1', amount: 0, numberOfFriends: 0 }]);

  const addEvent = () => {
    const newEvent = { eventName: `Event ${events.length + 1}`, amount: 0, numberOfFriends: 0 };
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (index) => {
    const newEvents = [...events];
    newEvents.splice(index, 1);
    setEvents(newEvents);
  };

  return (
    <div className="w-full h-full flex flex-col items-center my-10">
      <div className="w-full h-12 flex items-center justify-center">
        <h1 className='text-2xl cursor-default'>Bill Split Application</h1>
      </div>
      <hr className='w-full'/>
      <div className='w-fit'>
          {events.map((event, index) => (
            <EventCard key={index} {...event} onDelete={() => deleteEvent(index)} />
          ))}
      </div>
      <button className='bg-slate-50 mt-4 w-[200px] h-[30px] rounded hover:bg-green-400' onClick={addEvent}>Add Event</button>
    </div>
  );
}
