import React from "react";

const Announcements = () => {
  return (
    <div
      className=" w-100  text-primary text-center bg-light rounded shadow-sm mt-2 border-success"
      style={{ height: "385px" }}
    >
      <h3>Announcements</h3>
      <marquee
        direction="up"
        scrolldelay="120"
        height="300px"
        className="text-center"
      >
        <h6 >
          On the occasion of christmas holidays will be declared from 22-4-2022
          to 2-1-2023.
        </h6>
        <br />
        <h6 >
          On the occasion of christmas holidays will be declared from 22-4-2022
          to 2-1-2023.
        </h6>
        <br />
        <h6 >
          On the occasion of christmas holidays will be declared from 22-4-2022
          to 2-1-2023.
        </h6>
        <br />
        <h6 >
          On the occasion of christmas holidays will be declared from 22-4-2022
          to 2-1-2023.
        </h6>
        <br />
      </marquee>
    </div>
  );
};

export default Announcements;
