import React from "react";

function About() {
  return (
    <>
      <section className="bg-stone-200 py-20 px-10 lg:h-screen">
        <h1 className="text-5xl py-10">Meet Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-stone-800 rounded-t-full h-96">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTotL0so4WtmLyY0ujoftey9XzmWK2nedR1vC9906vznWRr3d0MSLSpYfZF4iOKz-rZJag&usqp=CAU"
              className="cover h-72 w-full rounded-t-full"
            ></img>
          </div>
          <div className="border border-stone-800 rounded-t-full h-96"></div>
          <div className="border border-stone-800 rounded-t-full h-96"></div>
          <div className="border border-stone-800 rounded-t-full h-96"></div>
        </div>
      </section>
    </>
  );
}

export default About;
