import React from "react";

const AdminDashboard = () => {
  return (
    <main className="bg-background">
      <div className="min-h-screen w-full flex flex-row gap-6 py-4">
        <aside className="h-screen bg-primary w-[15%] rounded-md fixed flex flex-col  items-center py-8">
          <button className="bg-button text-text py-1 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:bg-[#4da9bd]  focus:outline-none  focus:ring-sea-blue focus:ring-opacity-50 active:bg-sea-blue-darker">
            New event
          </button>
        </aside>

        <section className="flex flex-col w-[80%] ml-[17vw]">
          <nav className="h-[6vh] px-5 p-3 bg-primary flex justify-between items-center">
            <div>
              <p className="text-text text-[.8rem]">Good morning </p>
              <p className="text-text text-[.6rem]">Josiah !</p>
            </div>

            <div className="flex items-center bg-text w-[50%] rounded-sm overflow-hidden shadow-sm">
              <div className="px-2">🍳</div>
              <input
                type="text"
                className="pl-3 py-1 flex-1 outline-none"
                placeholder="Search..."
              />
            </div>

            <div className="flex justify-center items-center w-8 h-8 bg-blue-500 bg-text rounded-full">
              <span className="text-xl">🧞‍♂️</span>
            </div>
          </nav>

          <div className="flex gap-2 w-full py-4">
            <div className="h-[25vh] bg-primary w-[25%] rounded-md"></div>
            <div className="h-[25vh] bg-primary w-[25%] rounded-md"></div>
            <div className="h-[25vh] bg-primary w-[25%] rounded-md"></div>
            <div className="h-[25vh] bg-primary w-[25%] rounded-md"></div>
          </div>

          <div className="flex-1 flex flex-row gap-4">
            {/* Graph and analytics section */}
            <section className="w-[65%] flex flex-col gap-2 overflow-y-auto max-h-[70vh]">
              <div className="h-[50vh] bg-primary rounded-md p-2">
                <p>Thsi is a trial </p>
                <p>Thsi is a trial </p>
                <p>Thsi is a trial </p>
                <p>Thsi is a trial </p>
              </div>
              <div className="h-[50vh] bg-primary rounded-md"></div>
            </section>

            {/* Subscribed users section */}
            <section className="h-[70vh] w-[35%] bg-primary overflow-y-auto">
              {/* Content for subscribed users */}
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AdminDashboard;
