import Users from '../../Components/Users/Users.tsx';
import ToolBar from '../../Components/ToolBar/ToolBar.tsx';

const UsersInfo = () => {
  return (
    <div>
      <header>
        <ToolBar />
      </header>
      <main className="container">
        <Users />
      </main>
    </div>
  );
};

export default UsersInfo;
