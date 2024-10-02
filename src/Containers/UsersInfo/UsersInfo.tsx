import Users from '../../Components/Users/Users.tsx';
import ToolBar from '../../Components/ToolBar/ToolBar.tsx';
import UserForm from '../../Components/UserForm/UserForm.tsx';
import { useState } from 'react';
import { IUser } from '../../types';

const UsersInfo = () => {
  const [users, setUsers] = useState<IUser[]>([
    {
      id: "01",
      name: "Molli",
      email: "molli@gmail.com",
      position: "Manager",
      active: true,
    },
    {
      id: "02",
      name: "Salli",
      email: "salli@gmail.com",
      position: "Administrator",
      active: true,
    },
    {
      id: "03",
      name: "Elli",
      email: "elli@gmail.com",
      position: "Customer service",
      active: false,
    },
    {
      id: "04",
      name: "Milla",
      email: "milla@gmail.com",
      position: "Tour guide",
      active: false,
    },
  ]);

  const addNewUser = (newUser: IUser) => {
    setUsers((prevState) => [...prevState, newUser]);
  };

  return (
    <div className="pb-5 bg-success text-dark bg-opacity-10">
      <header>
        <ToolBar />
      </header>
      <main className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-3 mb-3">
            <UserForm addNewUser={addNewUser} />
          </div>
          <div className="col-12 col-md-9">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <Users users={users} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UsersInfo;
