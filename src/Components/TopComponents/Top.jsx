import HyperLink from './HyperLink.jsx';
import NotesTaking from './NotesTaking.jsx';
import WeatherApp from './WeatherApp.jsx';

export default function Top() {
  return (
    <header className='flex justify-between mt-2 mx-2'>
      <HyperLink/>
      <NotesTaking/>
      <WeatherApp/>
    </header>
  );
}
