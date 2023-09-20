import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  useEffect(()=>{
    nameRef.current.focus();
  },[])
  const handleSubmit = () => {
    emailRef.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="p-5 shadow-md border-2 rounded-lg shadow-sky-200">
        <h2 className="text-3xl my-4 font-bold">useRef Form</h2>
        <form onSubmit={handleSubmit} className="text-lg space-y-5">
          <input
            className="bg-gray-200 rounded-lg px-2 py-1 border-2 border-sky-200"
            type="text"
            name="name"
            placeholder="Your name"
            ref={nameRef}
            defaultValue={""}
          />
          <br />
          <input
            className="bg-gray-200 rounded-lg px-2 py-1 border-2 border-sky-200"
            type="email"
            name="email"
            placeholder="Your e-mail"
            ref={emailRef}
            defaultValue={""}
          />
          <br />
          <input
            className="bg-gray-200 rounded-lg px-2 py-1 border-2 border-sky-200"
            type="password"
            name="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
          <br />
          <input
            className="bg-sky-400 hover:bg-sky-500 hover:text-white font-semibold px-3 py-1 rounded-lg"
            type="Submit"
            
          />
        </form>
      </div>
    </div>
  );
};

export default RefForm;


// import { useEffect, useRef } from "react";

// const RefForm = () => {

//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   useEffect(()=>{
//     nameRef.current.focus();
//   },[])

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(nameRef.current.value);
//     console.log(emailRef.current.value);
//     console.log(passwordRef.current.value);
//   };

//   return (
//     <div className="text-center my-10">
//       <form onSubmit={handleSubmit}>
//         <input
//           ref={nameRef}
//           type="text"
//           className="outline-1 bg-gray-300 rounded-lg border-2 border-black px-2 py-1"
//           name="name"
//         />
//         <br />
//         <input
//           ref={emailRef}
//           type="email"
//           className="outline-1 my-5 bg-gray-300 rounded-lg border-2 border-black px-2 py-1"
//           name="email"
          
//         />
//         <br />
//         <input
//           ref={passwordRef}
//           type="password"
//           className="outline-1 mb-5 bg-gray-300 rounded-lg border-2 border-black px-2 py-1"
//           name="password"
//         />
//         <br />
//         <input
//           type="submit"
//           value="Submit"
//           className="bg-red-400 px-3 py-1 rounded-lg"
//         />
//       </form>
//     </div>
//   );
// };

// export default RefForm;
