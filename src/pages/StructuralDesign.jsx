import React, { useEffect } from "react";

function StructuralDesign() {
  useEffect(() => {
    fetch(
      "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=100&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return <div>StructuralDesign</div>;
}

export default StructuralDesign;
