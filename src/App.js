import React, { useState, useEffect } from "react";
import "./App.css";
import ProductInfo from "./ProductInfo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LinkForm from "./components/LinkForm";
import Navbar from "./components/Navbar";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  useEffect(() => {
    const shortURL = async () => {
      let data = JSON.stringify({
        long_url: "https://dev.bitly.com/api-reference/#createBitlink",
      });

      let config = {
        method: "post",
        url: "https://api-ssl.bitly.com/v4/shorten",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 154286b109cf1ffdbf7feec8cf751ec24ecd6dd9",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          setShortUrl(response.data?.link);
          navigator.clipboard.writeText(response.data?.link);
          toast.success("Link Copied to Clipboard");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (longUrl) {
      shortURL();
    }
  }, [longUrl]);
  const setURL = (url) => {
    setLongUrl(url);
  };
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4">
        <Navbar />
        <ToastContainer />
        <Hero shortUrl={shortUrl} />
        <LinkForm setURL={setURL} />
        <ProductInfo />
      </div>
      <Footer />
    </>
  );
}

export default App;
