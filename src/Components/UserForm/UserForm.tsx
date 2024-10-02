const UserForm = () => {
  return (
    <form>
      <h3 className="mt-3 mb-4">Add new user</h3>
      <div className="form-group mb-2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value=""
          id="name"
          name="name"
          className="form-control"
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value=""
          id="email"
          name="email"
          className="form-control"
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="position">Position:</label>
        <select className="form-select mt-2">
          <option selected>Select your position!</option>
          <option value="">Manager</option>
          <option value="">Administrator</option>
          <option value="">Tour operator</option>
          <option value="">Tour guide</option>
          <option value="">Guide-translator</option>
          <option value="">Animator</option>
          <option value="">Customer Service Specialist</option>
        </select>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="active">Active:</label>
        <input
          className="form-check-input mt-1 ms-3"
          type="radio"
          value="active"
          id="active"
          name="active"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Add
      </button>
    </form>
  );
};

export default UserForm;
