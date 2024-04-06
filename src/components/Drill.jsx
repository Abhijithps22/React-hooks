import React, { useState } from "react";

const Drill = () => {
  const [user] = useState("Abhijith"); // Destructure the state value correctly
  return (
    <div>
      <h1>Drill</h1>
      <Component2 user={user} />
    </div>
  );
};

function Component2({ user }) {
  return <Component3 user={user} />;
}

function Component3({ user }) {
  return <Component4 user={user} />;
}

function Component4({ user }) {
  return (
    <div>
      <h3>Hello {user} is name</h3>
    </div>
  );
}

export default Drill;
