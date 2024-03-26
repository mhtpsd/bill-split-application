"use client"; //Marked use client because it's a client side component

import { useState } from "react"; //for state management

import EventCard from "@/Components/EventCard";

export default function Home() {
  const [events, setEvents] = useState([
    { eventName: "Event 1", amount: 0, numberOfFriends: 0 },
  ]); //checking state of cards
  const [splitAmounts, setSplitAmounts] = useState([]); //setting value of splitted amount each time calculate or reset is clicked
  const [isCalculated, setIsCalculated] = useState(false); //for disabling those buttons which is no need to access after calculate is clicked

  //Adding new cards
  const addEvent = () => {
    const newEvent = {
      eventName: `Event ${events.length + 1}`,
      amount: 0,
      numberOfFriends: 0,
    };
    setEvents([...events, newEvent]);
  };

  //Deleting cards one at a time
  const deleteEvent = (index) => {
    const newEvents = [...events];
    newEvents.splice(index, 1);
    setEvents(newEvents);
  };

  //Splitting Bill Amount
  const calculateSplit = () => {
    const newSplitAmounts = events.map(
      (event) => event.amount / event.numberOfFriends
    );
    setSplitAmounts(newSplitAmounts);
    setIsCalculated(true);
  };

  //Resetting states
  const reset = () => {
    setEvents([{ eventName: "Event 1", amount: 0, numberOfFriends: 0 }]);
    setSplitAmounts([]);
    setIsCalculated(false);
  };

  //Taking input from users
  const handleInputChange = (index, field, value) => {
    const newEvents = [...events];
    newEvents[index][field] = value;
    setEvents(newEvents);
  };

  return (
    <div className="w-full h-full flex flex-col items-center my-10">
      <div className="w-full h-12 flex items-center justify-center">
        <h1 className="text-2xl cursor-default" onClick={reset}>
          Bill Split Application
        </h1>
      </div>
      <hr className="w-full" />

      {/* Rendering Cards
          One is rendered bydefault for user
      */}
      <div className="w-fit">
        {events.map((event, index) => (
          <>
            <EventCard
              key={index}
              event={event}
              onInputChange={(field, value) =>
                handleInputChange(index, field, value)
              }
              onDelete={() => deleteEvent(index)}
              disabled={isCalculated}
            />
            <hr />
          </>
        ))}
      </div>
      <button
        className="bg-slate-50 mt-4 w-[200px] h-[30px] rounded hover:bg-green-400"
        onClick={addEvent}
      >
        Add Event
      </button>
      <button
        className="bg-slate-50 mt-4 w-[300px] h-[40px] rounded hover:bg-black hover:text-white relative"
        onClick={calculateSplit}
      >
        Calculate
      </button>

      {/*
          Showing Splitted Bill Amount
      */}
      {isCalculated && (
        <span className="text-xl font-bold relative my-5">
          Splitted Bill Amount
        </span>
      )}
      {isCalculated && <hr className="w-[500px]" />}

      <div className="w-[500px] p-5 flex flex-col items-center justify-evenly">
        {splitAmounts.map((amount, index) => (
          <div
            key={index}
            className="w-full relative flex flex-col items-center"
          >
            <div className="w-full flex items-center justify-evenly">
              <span className="text-lg text-slate-500 italic	">
                {events[index].eventName}: Per head:{" "}
              </span>
              <span className="text-lg ">{Number(amount).toFixed(2)}</span>
            </div>
          </div>
        ))}
        {isCalculated && <hr className="w-[500px]" />}
      </div>

      {/*
        Resetting States
        */}
      {isCalculated && (
        <button
          className="bg-slate-50 mt-4 w-[200px] h-[30px] rounded hover:bg-blue-500"
          onClick={reset}
        >
          New
        </button>
      )}
    </div>
  );
}
