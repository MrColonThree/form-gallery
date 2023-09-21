import { data } from "autoprefixer";
import ReusableForm from "../ReusableForm/ReusableForm";

const MultipleForms = () => {
  const handleSignUpSubmit = (data) => {
    console.log("signup data", data);
  };
  const handleUpdateSubmit = (data) => {
    console.log("update profile", data);
  };
  const handleLoginSubmit = (data)=>{
    console.log('login data', data)
  }
  return (
    <div className="flex flex-wrap justify-center gap-20">
      <ReusableForm formTitle={"SignUp"} handleSubmit={handleSignUpSubmit}>
        <h1>Please sign up to join our community </h1>
      </ReusableForm>
      <ReusableForm
        formTitle={"Update"}
        handleSubmit={handleUpdateSubmit}
      >
        <h1>Please fill the form to to update your data </h1>
      </ReusableForm>
      <ReusableForm
        formTitle={"Login"}
        handleSubmit={handleLoginSubmit}
      >
        <h1>Please login to explore our community </h1>
      </ReusableForm>
    </div>
  );
};

export default MultipleForms;
