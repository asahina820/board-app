import './index.css';

function Header() {
  return (
    <header className="bg-green-400 shadow-md flex items-center justify-between h-16 px-8 py-02">
      <span className="text-2xl text-white">掲示板</span>
      <span className="text-white underline">スレッドを立てる</span>
    </header>
  );
}

export default Header;
