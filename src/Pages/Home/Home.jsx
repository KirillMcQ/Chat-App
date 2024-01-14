import './Home.css';
import ChatsList from '../../Components/ChatsList/ChatsList';
import ChatWindow from '../../Components/ChatWindow/ChatWindow';
import UserInfoWindow from '../../Components/UserInfoWindow/UserInfoWindow';

function Home({ user }) {
  return (
    <div className='homeGridWrapper'>
      <ChatsList />
      <ChatWindow />
      <UserInfoWindow />
    </div>
  );
}

export default Home;
