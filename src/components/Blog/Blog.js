import React from "react";

const Blog = () => {
  return (
    <div>
      {/* Banner */}
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 py-10'>
        <h3 className='text-center text-xl md:text-2xl lg:text-4xl text-white font-black uppercase'>
          Blog
        </h3>
      </div>
      {/* Questions */}
      <div className="bg-gray-400 px-5 md:px-40 py-10">
        <div className="pb-5">
          <h5 className="text-xl font-bold">1. What is Cors?</h5>
          <p>
            The full form of cors is cross origin resource sharing. It is mechanism to share a servers data to any domains or port. When it is enabled any or some domains or port will be able to access server data if on that server the cors mechanism is activated.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold">2. Why are you using firebase? What other options do you have to implement authentication?</h5>
          <p>
            Firebase is the part of tech giant google. They have so many expert at web security. They all together working for secure data. And the are ver well known company. So we can beleive them and leave the security related task to their hand.
          </p>
          <p>Other option like firebase are - Okta, Auth0, ORY etc</p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold">3.  How does the private route work?</h5>
          <p>
            Private route prevent unauthentic person to access web pages. Privaterouter track user. If no user is logged in then it prevent unauthorized user access web pages. If user logged in then it permit that user to access web pages by that users authorization.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold">4. What is Node? How does Node work?.  </h5>
          <p>
            Node.js is an open source server environment. Node.js uses JavaScript on the server.
            Just like other languages node comes with packages and modules. These are libraries of functions that we can import from npm (node package manager) into our code and utilize.


          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
