import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Grid, Button, TextField } from "@material-ui/core";
// import { useHistory, useLocation } from "react-router-dom";
const useStyles = makeStyles(theme => ({
    root: {
        padding: "20px 80px",
        textAlign: "center",
    },
    field: {
        width: "100%",
        marginBottom: 10,
    },
    button: {
        fontSize: 14,
        color: "white",
        textTransform: "none",
        width: 135,
        height: 36,
        fontWeight: "normal",
        float: "right",
        marginTop: 50
    },

}));

interface Props {
    // header: string;
    handleChange: (e: any) => void;
    formData: any;
    handleOnSubmit: (event: any) => void;
    index: number;
}
export default function Step1(props: Props) {

    const classes = useStyles();
    // const history = useHistory();
    // const location = useLocation();
    const { handleChange, formData, handleOnSubmit, index } = props;

    // const [formData, setFormData] = useState({
    //     fname: "",
    //     mobileNo: "",
    //     emailid: "",
    //     address: ""
    // });
    // const handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     console.log(formData);
    //     // props.history.push("./step2");
    // };
    return (
        <div className={classes.root}>
            <form
                onSubmit={handleOnSubmit}
            >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            label="Full Name"
                            name="fname"
                            value={formData.fname}
                            onChange={handleChange}
                            required
                            className={classes.field}
                            margin="dense"
                            variant="outlined"
                            inputProps={{ maxLength: 100 }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Mobile Number"
                            name="mobileNo"
                            value={formData.mobileNo}
                            onChange={handleChange}
                            required
                            className={classes.field}
                            margin="dense"
                            variant="outlined"
                            inputProps={{ maxLength: 100 }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Email Id"
                            name="emailid"
                            value={formData.emailid}
                            onChange={handleChange}
                            required
                            className={classes.field}
                            margin="dense"
                            variant="outlined"
                            inputProps={{ maxLength: 100 }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className={classes.field}
                            margin="dense"
                            variant="outlined"
                            inputProps={{ maxLength: 100 }}
                        />
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    {/* {index === 0 && (
                        <Button
                            type="submit"
                            className={classes.button}
                            variant="contained"
                            color="secondary"
                            onClick={btnhandleSubmit}
                        >
                            Next
                        </Button>
                    )} */}

                </Grid>
            </form>
        </div>
    );
}