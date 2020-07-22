// arquivo Users.js
import React from 'react';

const Users = ({ greetingMessage = 'Hi There', match }) => {
  const { id } = match.params;
  return (
    <div>
      <h2> Users </h2>
      {id ? (
        <p>
          {greetingMessage} user number {id} , this is my awesome Users component
        </p>
      ) : (
        <p>{greetingMessage}, this is my awesome Users component</p>
      )}
    </div>
  );
};
export default Users;
