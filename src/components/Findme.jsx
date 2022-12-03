import React, { useEffect, useState } from "react";
import axios from "axios";


function Findme() {
  const [data, setmediumdata] = useState([]);

  useEffect(() => {
    // const fetchd = () => {
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@adarsh-gupta&api_key=hnzfdqelxnqgolluihzzdma4ot6xmskzdlf09uvq&count=10`
      )
      .then((res) => {
        setmediumdata(res.data);
      });
    // };

    // fetchd();
  }, []);
  //   console.log(data)
  return (
    <div>
   
    </div>
  );
}

export default Findme;
