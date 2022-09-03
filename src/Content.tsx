import './index.css';
import Thread from './Thread';

function Content() {
  return (
    <main className='h-screen w-screen bg-neutral-300'>
        <div className='flex flex-col justify-center items-center'>
            <Thread />
        </div>
    </main>
  );
}

export default Content;
