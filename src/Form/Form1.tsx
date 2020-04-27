import React, { useState } from "react";
import ReactDOM from "react-dom";

// import useRequiredFields from "./useRequiredFields";

function Form() {
    const [formIndex, setFormIndex] = useState(0);
    const [namesFilled, updateNames] = useState([
        "first-name",
        "last-name"
    ]);
    const [socialsFilled, updateSocials] = useState([
        "github",
        "twitter",
        "codepen"
    ]);

    function handleFormSubmit(event: any) {
        event.preventDefault();
        setFormIndex(formIndex + 1);
        console.log("first-name");
    }

    return (
        <div className="App">
            {/* First section of the form */}
            {formIndex === 0 && (
                <form onSubmit={handleFormSubmit} autoComplete="off">
                    <p>Your name</p>
                    <div className="input-row">
                        <label htmlFor="first-name">First Name</label>
                        <input
                            id="first-name"
                            type="text"
                        />
                    </div>
                    <div className="input-row">
                        <label htmlFor="last-name">Last Name</label>
                        <input
                            id="last-name"
                            type="text"
                        />
                    </div>
                    <div>
                        {/* <button type="submit" disabled={disableNameSection}> */}
                        <button type="submit" disabled={!namesFilled}>
                            Continue
            </button>
                    </div>
                </form>
            )}

            {/* Second section of the form */}
            {formIndex === 1 && (
                <form onSubmit={handleFormSubmit} autoComplete="off">
                    <p>Your social profiles</p>
                    <div className="input-row">
                        <label htmlFor="github">Github Username</label>
                        <input
                            id="github"
                            type="text"
                        // onChange={() => setGithubFilled(true)}
                        />
                    </div>
                    <div className="input-row">
                        <label htmlFor="twitter">Twitter Username</label>
                        <input
                            id="twitter"
                            type="text"
                        // onChange={() => setTwitterFilled(true)}
                        />
                    </div>
                    <div className="input-row">
                        <label htmlFor="codepen">Codepen Username</label>
                        <input
                            id="codepen"
                            type="text"
                        // onChange={() => setCodepenFilled(true)}
                        />
                    </div>
                    <div>
                        {/* <button type="submit" disabled={disableSocialSection}> */}
                        <button type="submit" disabled={!socialsFilled}>
                            Submit
            </button>
                    </div>
                </form>
            )}

            {/* Thank you message */}
            {formIndex === 2 && (
                <div>
                    <p>Thanks!</p>
                    <button type="button" onClick={() => setFormIndex(0)}>
                        Back to start
          </button>
                </div>
            )}
        </div>
    );
}
export default Form;