import React, { Suspense } from "react";
import useFetch from "@/hooks/useFetch";
import styles from "@/styles/Home.module.css";
import fetchData from "@/hooks/fetchData";

const apiData = fetchData("https://jsonplaceholder.typicode.com/users");

function ApiData() {
  const data = apiData.read();
  return (
    <div className={styles.containerDataFetch}>
      <h1>Data con fetch para TopHeader MEM</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}

export default ApiData;
