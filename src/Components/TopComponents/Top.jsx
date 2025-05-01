import HyperLink from './HyperLink.jsx';
import NotesTaking from './NotesTaking.jsx';
import Sounds from './Sounds.jsx';
import WeatherApp from './WeatherApp.jsx';

export default function Top() {
  return (
    <header className='flex justify-between mt-2 mx-2'>
      <div className='relative'>
      <HyperLink/>
      <Sounds/>
      </div>
      <NotesTaking/>
      <WeatherApp/>
    </header>
  );
}
