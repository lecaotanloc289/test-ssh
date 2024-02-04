import {
    Box,
    Button,
    Step,
    StepButton,
    Stepper,
    Typography,
} from "@mui/material";
import React from "react";
import './CartRoute.scss'

// CART ROUTE

const steps = ["Cart", "Customer Information", "Shipping & Payment", "Review"];
export function CartRoute() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <Box  className='cartRoute1' sx={{ width: "75%" }}>
            <Stepper className='cartRoute2' nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step className='cartRoute3' key={label} completed={completed[index]}>
                        <StepButton className='cartRoute4' onClick={handleStep(index)}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>

            {/* Control */}
            {/* <div>
                {allStepCompleted() ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - your&apos;re finished
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}
                        >
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                            Step {activeStep + 1}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}
                        >
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{flex: '1 1 auto'}}/>
                            <Button onClick={handleNext} sx={{mr: 1}}>
                                Next
                            </Button>
                            {
                                activeStep !== steps.length && 
                                (
                                    completed[activeStep] ? 
                                    (<Typography variant="caption" sx={{display: 'inline-block'}}>
                                        Step {activeStep + 1} already completed
                                    </Typography>) : 
                                    (
                                        <Button onClick={handleComplete}>
                                            {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                                        </Button>
                                    )
                                )
                            }
                        </Box>
                    </React.Fragment>
                )}
            </div> */}
        </Box>
    );
}
