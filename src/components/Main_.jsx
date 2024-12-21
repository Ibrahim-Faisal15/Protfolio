import React from "react";


function Main() {
  const imgUrl = new URL("../../public/portfolio_photo.jpg", import.meta.url).href;
  return (
    <div className="details  flex  flex-col h-[35%] w-[45%] sm:h-[50%] sm:w-[45%]  md:w-[30%] md:h-[35%] lg:w-[20%] lg:h-[50%]  border-2 border-white   ">
      <div className="picture flex justify-center items-center  h-[50%] w-[100%] ">
        <img
          src={imgUrl}
          alt="Avatar"
          className="rounded-full h-[6.25rem] w-[6.25rem] sm:h-[9rem] sm:w-[9rem] md:h-[7rem] md:w-[7rem] lg:h-[10rem] lg:w-[10rem] "
        />
      </div>
      <div className="name  h-[15%] w-[100%] flex justify-center items-center text-xl font-semibold font-mono text-white  md:text-2xl">Ibrahim Faisal</div>
      <div className="description h-[35%] w-[100%] pb-3 sm:pb-10 md:pb-10 lg:pb-10 text-white text-md flex  items-center justify-center text-center lg:text-3xl font-mono"><h1>"I am a nice <span className="line-through">guy</span> <div>programmer"</div></h1></div>
    </div>
  );
}

export default Main;


//Add a breakpoint and make it more resposneive