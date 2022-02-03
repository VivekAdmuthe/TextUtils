import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
  };

  return (
    <>
      <div className="container main-heading my-3 " style={myStyle}>
        <div className=" text-center" style={myStyle}>
          <h1 className=" display-4">About</h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container" style={myStyle}>
          <div className="row my-5">
            <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
              <figure>
                <img
                  src="https://i.stack.imgur.com/xJida.png"
                  alt="im"
                  className="about_img img-fluid"
                />
              </figure>
            </div>
            <div
              style={myStyle}
              className=" about col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-item-start flex-column "
            >
              <h1>TextUtils</h1>
              <p>
                TextUtils is a text converter , Formatter which can be used for
                converting text from uppercase to lowercase and lowercase to
                uppercase . 
                It is also used to copy text to your clipboard.
                The formatter which removes extra blank spaces in your content and
                last one it is used to clear the text content.
                It is time saving tool for anyone and user friendly as well.
                Thank you for visiting
                Our page !!
              </p>
              <a
                href="https://en.wikipedia.org/wiki/Formatted_text"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="btn btn-info"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Wikipedia"
                >
                  {" "}
                  check more
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
