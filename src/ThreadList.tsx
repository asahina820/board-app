import './index.css';
import {useState} from 'react'
import {useEffect} from 'react'

function ThreadList() {
	// スレッド情報を保持する
	const[threads, setThreads] = useState([]);

	// APIにアクセスして、スレッド一覧を取得する
	useEffect(() => {
		fetch("https://railway-react-bulletin-board.herokuapp.com/threads")
		.then(res => res.json())
		.then(data => {
				for(let i = 0; i <data.length; i++){
						setThreads(data[i].title)
						console.log(data[i].title)
				}
		})
	} , []);

  return (
    <tr className='bg-white'>
        <td className='border text-xl'>ああああああああ</td>
    </tr>
  );
}

export default ThreadList;

