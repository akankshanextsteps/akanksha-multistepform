import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { BrowserRouter as Route, Link, useLocation } from "react-router-dom"

const useStyles = makeStyles(theme => ({
    root: {
        padding: 80,
        textAlign: "center",
    },
    field: {
        width: "100%",
        marginBottom: 10,
    },
    button: {
        width: 100,
        margin: "20px 40px"
    },
}));
function Form() {
    const classes = useStyles();
    const [formIndex, setFormIndex] = React.useState(0);
    const [formData, setFormData] = React.useState({
        step: "1",
        fname: "",
        mobileNo: "",
        emailid: "",
        address: "",
        age: '',
        city: '',
        country: '',
        skypeid: '',
    });
    const handleSubmit = (event: any) => {
        event.preventDefault();
        setFormIndex(formIndex + 1);
        console.log(formData);
        console.log(formIndex);
    }
    const nextStep = (e: any) => {
        e.preventDefault();
        setFormIndex(formIndex + 1);
    }
    const prevStep = (e: any) => {
        e.preventDefault();
        setFormIndex(formIndex - 1);
    }
    const handleOnChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prevState: any) => {
            return { ...prevState, [name]: value };
        });
    };
    return (
        <div className={classes.root}>
            <Typography variant="h5"> MultiStep Form </Typography>
            <div>
                {/* <Button className={classes.button}
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}> Step1</Button>
                <Button
                    className={classes.button}
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}> Step2</Button>
                <Button
                    className={classes.button}
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}> Result</Button> */}
            </div>
            {formIndex === 0 && (
                <>
                    <Step1 handleChange={handleOnChange}
                        formData={formData}
                        handleOnSubmit={handleSubmit}
                        index={formIndex}
                    />
                    <Button
                        type="submit"
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={nextStep}
                    >
                        Next
                        </Button>
                </>
            )}
            {formIndex === 1 && (
                <>
                    <Step2
                        handleChange={handleOnChange}
                        formData={formData}
                        handleOnSubmit={handleSubmit} />
                    <Button
                        type="submit"
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={prevStep}
                    >
                        Back
                        </Button>
                    <Button
                        type="submit"
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={handleSubmit}
                    >
                        Submit
                        </Button>
                </>
            )}
        </div>
    );
}

export default Form;
