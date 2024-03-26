import EventCard from '@/Components/EventCard';
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-12 flex items-center justify-center">
        <h1 className='text-2xl cursor-default'>Bill Split Application</h1>
      </div>
      <hr className='w-full'/>
      <EventCard eventName="Event 1" amount={0} numberOfFriends={0} />
    </div>
  );
}
