import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/Username';

function Header() {
  return (
    <header className="border-b-2 border-stone-200 bg-yellow-500 px-4 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        Pizza Ordering
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
