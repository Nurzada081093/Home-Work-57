import Users from '../../Components/Users/Users.tsx';
import ToolBar from '../../Components/ToolBar/ToolBar.tsx';
import UserForm from '../../Components/UserForm/UserForm.tsx';

const UsersInfo = () => {
  return (
    <div>
      <header>
        <ToolBar />
      </header>
      <main className="container">
        <div className="d-flex justify-content-around">
          <div>
            <UserForm/>
          </div>
          <div>
            <Users/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UsersInfo;
