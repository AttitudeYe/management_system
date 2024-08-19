import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Management System</h1>
      <p className="text-xl mb-8">This is a simple management system built using Next.js and Tailwind CSS.</p>      <p className="text-xl mb-8">You can use this system to manage your tasks, projects, and more.</p>
      <p className="text-xl mb-8">To get started, please login or sign up.</p>
      </div>
  );
}

export const getServerSideProps = ((context) => {
  console.log(context, '=====')
  return {
    props: {
      layout: true,
    },
  };  
})

export default Home;
