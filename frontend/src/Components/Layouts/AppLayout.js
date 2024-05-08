import React from "react";

const AppLayout = () => (WrappedComponent) => {
  return (props) => (
    <div>
      <div>Header</div>
      <WrappedComponent {...props} />
      <div>Footer</div>
    </div>
  );
};

export default AppLayout;

// function AppLayout() {
//   return function WrappedComponent() {
//     return function (props) {
//       return (
//         <div>
//           <div>Header</div>
//           <WrappedComponent {...props} />
//           <div>Footer</div>
//         </div>
//       );
//     };
//   };
// }
