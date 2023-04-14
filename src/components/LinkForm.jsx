import React, { useState } from "react";

const LinkForm = ({ setURL, shortURL }) => {
  const [urlInput, setUrlInput] = useState("");

  const onSubmit = () => {
    if (urlInput) {
      setURL(urlInput);
      setUrlInput("");
    } else {
      alert("Empty Input Field");
    }
  };

  return (
    <div className="card w-full bg-[#0236b9] shadow-xl mt-10">
      <div className="card-body w-full mx-auto">
        <div className="flex items-center justify-between sm:gap-14 w-11/12 mx-auto sm:w-full flex-wrap sm:flex-nowrap">
          <input
            type="text"
            placeholder="Shorten Your Link"
            className="input input-bordered input-lg w-full "
            onChange={(e) => setUrlInput(e.target.value)}
            value={urlInput}
          />
          <button
            className="btn btn-base btn-lg  my-4 capitalize w-full sm:btn-wide "
            onClick={() => onSubmit()}
          >
            Shorten
          </button>
        </div>
        <p className="text-center">
          By clicking SHORTEN, you are agreeing to Bitly’s Terms of Service ,
          Privacy Policy, and Acceptable Use Policy
        </p>
      </div>
    </div>
  );
};

export default LinkForm;
