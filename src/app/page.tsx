import React from "react";

const signupORLogin = () => {
  return (
    <section className=" h-screen w-screen bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.7),rgba(28,0,0,0.8)),url('https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
      <div className=" shadow-lg  flex items-center justify-center w-full h-full ">
        <div className=" lg:flex lg:flex-wrap md:w-[50%] m-auto">
          <div className="px-4 md:px-0 w-full bg-senary rounded-lg ">
            <div className="md:mx-6 md:p-4">
              <div className="text-center">
                <img
                  className="mx-auto w-48"
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  alt="logo"
                />
                <h4 className="mb-4 mt-1 pb-1 text-xl font-semibold ">
                  We are The Lotus Team
                </h4>
              </div>

              <form>
                <p className="mb-4 text-center">Please login to your account</p>

                <div className="relative mb-4" data-twe-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block focus:border border-[gray] min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"
                    placeholder="Username"
                  />
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate  leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:bg-button peer-focus:-translate-y-[0.4rem] peer-focus:scale-[0.8] peer-focus:text-text peer-data-[twe-input-state-active]:-translate-y-[1rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-text peer-focus:text-[.8rem] px-[2px] rounded-sm"
                  >
                    Username
                  </label>
                </div>

                <div className="relative mb-4" data-twe-input-wrapper-init>
                  <input
                    type="password"
                    className="peer block min-h-[auto] focus:border border-[gray] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput11"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="exampleFormControlInput11"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:bg-button  peer-focus:-translate-y-[.4rem]  peer-focus:scale-[0.8] peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 peer-focus:text-text peer-focus:text-[.8rem] px-[2px] rounded-sm"
                  >
                    Password
                  </label>
                </div>

                <div className="mb-12 pb-1 pt-1 text-center">
                  <button
                    className="mb-3 inline-block w-full text-text rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out  focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong bg-button"
                    type="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Log in
                  </button>
                  <a href="#!" className="font-mono">
                    Forgot password?
                  </a>
                </div>

                <div className="flex items-center justify-between pb-6">
                  <p className="mb-0 me-2 font-mono">Dont have an account?</p>
                  <button
                    type="button"
                    className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950 hover:bg-button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none bg-[url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center">
              <div className="px-4 py-6 text-text md:mx-6 md:p-12">
                <h4 className="mb-6 text-xl font-semibold">
                  We are more than just a company
                </h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default signupORLogin;
