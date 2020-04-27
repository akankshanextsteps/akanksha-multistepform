import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Grid, Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
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
    handleChange: (e: any) => void;
    formData: any;
    handleOnSubmit: (event: any) => void;
}
export default function Step2(props: Props) {
    const classes = useStyles();
    const { handleChange, formData, handleOnSubmit } = props;
    return (
        <div className={classes.root}>
            <form
                onSubmit={handleOnSubmit}
            >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            label="Age"
                            name="age"
                            value={formData.age}
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
                            label="Skype Id"
                            name="skypeid"
                            value={formData.skypeid}
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
                            label="City"
                            name="city"
                            value={formData.city}
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
                            label="Country"
                            name="country"
                            value={formData.country}
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
                    {/* <Button
                        type="submit"
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={btnhandleSubmit}
                    >
                        Next
              </Button> */}
                </Grid>
            </form>
        </div>
    );
}

