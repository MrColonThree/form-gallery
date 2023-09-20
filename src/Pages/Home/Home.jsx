import HookForm from "../HookForm/HookForm";
import MultipleForms from "../MultipleForms/MultipleForms";
import ReusableForm from "../ReusableForm/ReusableForm";
import SimpleForm from "../SimpleForm/SimpleForm";
import StatefulForm from "../StatefulForm/StatefulForm";
import RefForm from "../refForm/refForm";

const Home = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold">Here are some different kinds of forms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-10">
      <SimpleForm></SimpleForm>
      <RefForm></RefForm>
      <StatefulForm></StatefulForm>
      <HookForm></HookForm>
    </div>
    </div>
  );
};

export default Home;
