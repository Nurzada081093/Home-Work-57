import Users from "../../Components/Users/Users.tsx";
import ToolBar from "../../Components/ToolBar/ToolBar.tsx";
import UserForm from "../../Components/UserForm/UserForm.tsx";
import { useState } from "react";
import { IUser } from "../../types";

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
      position: "Customer Service",
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

  return (
    <div>
      <header>
        <ToolBar />
      </header>
      <main className="container mb-5">
        <div className="d-flex justify-content-between">
          <div className="me-3">
            <UserForm />
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <Users users={users} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default UsersInfo;
