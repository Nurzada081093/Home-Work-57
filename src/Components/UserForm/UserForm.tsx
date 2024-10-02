const UserForm = () => {
  return (
    <form className="p-4 mb-2 bg-primary-subtle text-primary-emphasis rounded-4">
      <h3 className="mt-3 mb-4 text-center">Add new user</h3>
      <div className="form-group mb-3">
        <label htmlFor="name" className="ms-2">
          Name:
        </label>
        <input
          type="text"
          value=""
          id="name"
          name="name"
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email" className="ms-2">
          Email:
        </label>
        <input
          type="email"
          value=""
          id="email"
          name="email"
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="position" className="ms-2">
          Position:
        </label>
        <select className="form-select mt-2">
          <option selected>Select your position!</option>
          <option value="">Manager</option>
          <option value="">Administrator</option>
          <option value="">Tour operator</option>
          <option value="">Tour guide</option>
          <option value="">Guide-translator</option>
          <option value="">Animator</option>
          <option value="">Customer Service</option>
        </select>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="active" className="ms-2">
          Active:
        </label>
        <input
          className="form-check-input mt-1 ms-3"
          type="radio"
          value="active"
          id="active"
          name="active"
        />
      </div>
      <button className="btn btn-primary w-100" type="submit">
        Add
      </button>
    </form>
  );
};

export default UserForm;
