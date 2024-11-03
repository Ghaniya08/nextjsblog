"use client";
import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram ,FaFacebook  ,FaLinkedin  } from "react-icons/fa6";
const Contact = ()=>{
//   const onSubmit = async (event:any) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "30c787a3-d0e8-460d-8f5b-cc8e4228caed");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       Swal.fire({
//         title: "Success!",
//         text: "Message sent successfully !",
//         icon: "success"
//       });
//     }
//   };
    return(
    <div >
        <section className="text-black body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
    <div className="text-center mb-10">
      <h1 className="text-3xl  font-extrabold text-center  dark:text-white md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-black">
        <strong>Contact us</strong>
      </h1>
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myverydarkpink inline-flex" />
      </div>
    </div>
      <p className="lg:w-2/3 text-myverydarkpink mx-auto leading-relaxed text-base">
      Interested in joining our team? Send us a message! Feel free to ask any questions or share your thoughts on customizing our website. Id love to hear your feedback!
      </p>
    </div>
    <form  >
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className=" -m-2">
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-myverydarkpink">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-mylitpink/25  rounded border border-myverydarkpink focus:border-myverydarkpink  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-myverydarkpink">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-mylitpink/25 border-myverydarkpink focus:border-myverydarkpink  rounded border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-myverydarkpink"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full rounded border bg-mylitpink/25 border-myverydarkpink focus:border-myverydarkpink  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-myverydarkpink/70 rounded text-lg">
           Send Message
          </button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t  text-center">
          <a className="text-black cursor-pointer">ghaniyaakhann08@gmail.com</a>
          <p className="leading-normal my-5 text-black">
            Follow me
            <br />
            For more updates 
          </p>
          <span className="inline-flex text-2xl gap-3 k">
          <a href="https://pk.linkedin.com/in/ghaniya-khan-138919308"> <FaLinkedin /></a>
          <a href="https://github.com/Ghaniya08"><IoLogoGithub  /></a>
          <a href="https://instagram.com/ghaniya08">< FaInstagram/></a>
          <a href="https://www.facebook.com/profile.php?id=61554662968933&mibextid=ZbWKwL"><FaFacebook /></a>
          </span>
        </div>
      </div>
    </div>
        </form>
  </div>
</section>

    </div>
    )
}

export default Contact;