import { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import TableStep from "./TableStep";
import ThirdStep from "./ThirdStep";
const AllSteps = () => {
  const [count, setCount] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    dateOfBirth: "",
    address: "",
    university: "",
    degree: "",
    graduation: "",
    employer: "",
    designation: "",
    experience: "",
  });
  const [isUpdate, setIsUpdate] = useState(false);
// const getData =(data) =>{
// console.log("coming from table.js to thirdstep.js",data);
// }


function parentAlert (user) {
  alert(user)
  console.log("parentUser",user);
}
  return (
    <div className="AllStep">
      {count === 1 && (
        <>
          <FirstStep
            count={count}
            setCount={setCount}
            formData={formData}
            setFormData={setFormData}
          />
          <TableStep
            setFormData={setFormData}
            formData={formData}
            isUpdate={isUpdate}
            setIsUpdate={setIsUpdate}
            alert={parentAlert}
          />
        </>
      )}
      {count === 2 && (
        <SecondStep
          count={count}
          setCount={setCount}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {count === 3 && (
        <ThirdStep
          count={count}
          setCount={setCount}
          formData={formData}
          setFormData={setFormData}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
          alert={parentAlert}
        />
      )}
    </div>
  );
};

export default AllSteps;
