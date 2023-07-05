import React from "react";
import useFetch from "@/hooks/useFetch";
import styles from "@/styles/Home.module.css";

function Data() {
  const { data, loading, error, handleCancelRequest } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className={styles.containerDataFetch}>
      <h1>Data con fetch para TopHeader MEM</h1>
      <button onClick={handleCancelRequest}>
        Cancelar petición al servidor
      </button>
      <div>
        <ul>
          {error && <li>Error: {error}</li>}
          {loading && <li>Cargando...</li>}
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Data;
