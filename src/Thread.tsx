import './index.css';
import ThreadList from './ThreadList';

function Thread() {
  return (
    <div className='pt-5'>
        <table  className='table-fixed'>
            <thead>
                <tr>
                    <th className='w-96 text-2xl'>新着スレッド</th>
                </tr>
            </thead>
            <ThreadList />
        </table>
    </div>
  );
}

export default Thread;
