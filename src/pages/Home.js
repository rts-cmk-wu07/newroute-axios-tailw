import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [classes, setClasses] = useState;
  //   const [isLoading, setIsLoading] = useState;
  //   const [error, setError] = useState;

  useEffect(function () {
    (async function () {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/classes"
        );
        console.log(response);
        if (response.status === 200) {
          setClasses(response.data);
        }
      } catch (error) {
        //setError(error);
        //console.log(error);
      } finally {
        //setIsLoading(false);
      }
    })();
  }, []);

  //console.log("klasser", classes);

  return (
    <>
      <h1>Home</h1>
    </>
  );
}
