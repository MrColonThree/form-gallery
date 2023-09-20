const ReusableForm = ({
  formTitle,
  submitButtonText = "Submit",
  handleSubmit,
  children
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.email.value,
    };
    handleSubmit(data);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="p-5 shadow-md border-2 rounded-lg shadow-sky-200">
        <h2 className="text-3xl my-4 font-bold">{formTitle}</h2>
        <div className="text-lg my-5">{children}</div>
        <form onSubmit={handleLocalSubmit} className="text-lg space-y-5">
          <input
            className="bg-gray-200 rounded-lg px-2 py-1 border-2 border-sky-200"
            type="text"
            name="name"
            placeholder="Your name"
          />
          <br />
          <input
            className="bg-gray-200 rounded-lg px-2 py-1 border-2 border-sky-200"
            type="email"
            name="email"
            placeholder="Your e-mail"
          />
          <br />
          <input
            className="bg-gray-200 rounded-lg px-2 py-1 border-2 border-sky-200"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <br />
          <input
            className="bg-sky-400 hover:bg-sky-500 hover:text-white font-semibold px-3 py-1 rounded-lg"
            type="Submit"
            value={submitButtonText}
          />
        </form>
      </div>
    </div>
  );
};

export default ReusableForm;
