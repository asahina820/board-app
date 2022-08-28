import './index.css';
import {useState} from 'react'
import {useEffect} from 'react'

function Thread() {
	// スレッド情報を保持する
	const[threads, setThreads] = useState<string[]>([]);
	const threadList: string[] = [];

	// APIにアクセスして、スレッド一覧を取得する
	useEffect(() => {
		fetch("https://railway-react-bulletin-board.herokuapp.com/threads")
		.then(res => res.json())
		.then(data => {
				for(let i = 0; i <data.length; i++){
						threadList.push(data[i].title);
				}
				setThreads(threadList);
				console.log(threadList)
		});
	} , []);

  const threadRecord = threads.map((threadTitle) =>{
		return(
			<tr key={threadTitle} className='bg-white'>
				<td className='border text-xl'>{threadTitle}</td>
			</tr>
		)
	})

	return (
    <div className='pt-5'>
			<table  className='table-fixed'>
				<thead>
						<tr>
								<th className='w-96 text-2xl'>新着スレッド</th>
						</tr>
				</thead>
				{threadRecord}
			</table>
    </div>
  );
}

export default Thread;
