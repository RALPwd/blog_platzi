import React, { useState, useEffect } from "react";
import "../index.scss";
const API = "https://jsonplaceholder.typicode.com/users";

function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setUser(data);
    }
    fetchData();
  }, [])

  const createRows = () =>
    user.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </td>
        <td >
          <a href={`http://${user.website}`}>{user.website}</a>
        </td>
      </tr>
    ));

  return (
    <div className="margin">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{createRows()}</tbody>
      </table>
    </div>
  );
}

export default Users;