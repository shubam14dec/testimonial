import './App.css';
import Testimonial from './components/Testimonial';
import reviews from './data';

function App() {
  return (
    <div className='flex w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>

      <div className='text-center'>
        <div className='text-4xl font-bold'>
          Our Testimonial
        </div>

        <div className='bg-violet-400 h-[4px] w-1/5 mt-1 mb-5 mx-auto'></div>

        <Testimonial reviews={reviews}/>
      </div>
      
    </div>
  );
}

export default App;
