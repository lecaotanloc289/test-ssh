import { ChevronLeftRounded, Star } from "@mui/icons-material";
import {
    Avatar,
    Button,
    Checkbox,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputBase,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Select,
    Stack,
    StepButton,
    TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { images } from "../../assets/images";
import icons from "../../assets/icons";
import "./Cart.scss";
import logo from "../../assets/logo";
import { Stepper, Step, StepLabel, Box } from "@mui/material";
import { formattedNumber } from "../../utils/appService";
import MainLayout from "../MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, fetchCart, increaseQuantity, removeFromCart } from "../../redux/actions/cartAction";

const recommend_product = [
    {
        image: images.clock,
        name: "Garmin Watch Fit X",
        price: 1725,
        rate: 4.6,
    },
    {
        image: images.clock1,
        name: "Garmin Watch Fit X",
        price: 1725,
        rate: 4.6,
    },
    {
        image: images.iphone,
        name: "Garmin Watch Fit X",
        price: 1725,
        rate: 4.6,
    },
    {
        image: images.sweat,
        name: "Garmin Watch Fit X",
        price: 1725,
        rate: 4.6,
    },
    {
        image: images.Bitmap,
        name: "Garmin Watch Fit X",
        price: 1725,
        rate: 4.6,
    },
    {
        image: images.lap,
        name: "Garmin Watch Fit X",
        price: 1725,
        rate: 4.6,
    },
];

export default function Cart() {
    return (
        <MainLayout>
            <Container maxWidth="lg">
                <CartHeader />
                <CartRoute />
            </Container>
        </MainLayout>
        
    );
}

function CartHeader() {
    return (
        <Stack
            direction={"row"}
            className="flex-space-between center cartHeader"
        >
            <div>
                <p className="h2 medium dark-title ">Shopping Cart</p>
                <p className="h7 regular dark-lightest95 mgt4">
                    This is your cart based on your item you want to buy..
                </p>
            </div>
            <Button
                className="button-outlined"
                startIcon={<ChevronLeftRounded />}
                variant="outlined"
            >
                <p className="normal h7 medium indigo">Back to shopping</p>
            </Button>
        </Stack>
    );
}

export function CartRoute() {
    const steps = [
        { 
            label: "Cart", 
            component: (<CartBody handleComplete={() => handleComplete()} />) },
        {
            label: "Customer Information",
            component: (
                <CartCustomerInfo
                    handleBack={() => handleBack()}
                    handleComplete={() => handleComplete()}
                />
            ),
        },
        {
            label: "Shipping & Payment",
            component: (
                <ShippingPayment
                    handleBack={() => handleBack()}
                    handleComplete={() => handleComplete()}
                />
            ),
        },
        {
            label: "Review",
            component: (
                <Review
                    handleBack={() => handleBack()}
                    handleComplete={() => handleComplete()}
                />
            ),
        },
    ];

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
        console.log('Next');
        
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <Box className="cartRoute1" >
            <Stepper className="cartRoute2" nonLinear activeStep={activeStep}>
                {steps.map((step, index) => (
                    <Step className="cartRoute3" completed={completed[index]}>
                        <StepButton
                            className="cartRoute4"
                            onClick={handleStep(index)}
                        >
                            {step.label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <Box>{steps[activeStep].component}</Box>
        </Box>
    );
}

function CartBody({handleComplete }) {
    const dispatch = useDispatch()
    
    // get user data from store
    const userData = useSelector((state) => state.auth.userData)

    // get cart item from store
    const cart = useSelector((state) => state.cart)
    let products = [];
    let userId;

    if(cart) {
        products = cart.products
    }

    if(userData) userId = userData.id

    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    // handle increase quantity & decrease quantity
    const handleIncrease = async (productId) => {
        const product = {
            userId: userId,
            productId: productId
        }
        await dispatch(increaseQuantity(product))
        dispatch(fetchCart(userId));

    }

    const handleDecrease = async (productId) => {
        const product = {
            userId: userId,
            productId: productId
        }
        await dispatch(decreaseQuantity(product))
        dispatch(fetchCart(userId));

    }

    // handle delete product from cart
    const handleDelete = async (productId) => {
        const product = {
            userId: userId,
            productId: productId
        }
        
        await dispatch(removeFromCart(product))
        dispatch(fetchCart(userId));
        setOpen(false);
    }

    // confirm delete
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container maxWidth="lg">
            <Stack direction={"row"} className="flex-space-between">
                <Stack spacing={4}>
                    { products ? (products.map((i, index) => (
                        <div className="cart-product">
                            <Grid container spacing={2} className="center">
                                <Grid className="flex-row" xs={3}>
                                    <Checkbox
                                        size="large"
                                        
                                    />
                                    <div className="image-container center">
                                        <img
                                            width={120}
                                            className="product-image"
                                            src={i.productId.image}
                                            alt=""
                                        />
                                    </div>
                                </Grid>
                                <Grid xs={4}>
                                    <div>
                                        <p className="h7 medium dark-title">
                                            {i.productId.name}
                                        </p>
                                        <p className="h8 regular dark-lightest95">
                                            {i.productId.brand}
                                        </p>
                                    </div>
                                </Grid>
                                <Grid xs={2}>
                                    <p
                                        style={{ lineHeight: "32px" }}
                                        className="h7 medium green product-price"
                                    >
                                        {formattedNumber(i.productId.price)}
                                    </p>
                                </Grid>
                                <Grid xs={2}>
                                    <Stack spacing={1} direction={"row"}>
                                        <IconButton
                                            onClick={() => handleDecrease(i.productId._id)}
                                        >
                                            <img src={icons.Minus} alt="" />
                                        </IconButton>
                                        <p className="h8 medium dark-title product-quantity">
                                            {i.quantity}
                                        </p>
                                        <IconButton
                                            onClick={() => handleIncrease(i.productId._id)}
                                        >
                                            <img src={icons.Add} alt="" />
                                        </IconButton>
                                    </Stack>
                                </Grid>
                                <Grid xs={1}>
                                    <IconButton 
                                    onClick={handleClickOpen}
                                     className="delete-product">
                                        <img src={icons.Trash} alt="" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <>
                    
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle className="h5 regular dark-title" id="alert-dialog-title">
                                {"Confirm remove product?"}
                                </DialogTitle>
                                <DialogContent>
                                <DialogContentText className="h7 regular dark-title" id="alert-dialog-description">
                                    Are you sure remove {i.productId.name}?
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button className="button-outlined" onClick={handleClose}>Disagree</Button>
                                <Button className= "button-contained" onClick={() => handleDelete(i.productId._id)}>
                                    Agree
                                </Button>
                                </DialogActions>
                            </Dialog>
                            </>
                        </div>
                    ))) : (<></>)
                    }
                </Stack>
                <div>
                    <Stack spacing={3}>
                        <div>
                            <p className="h6 medium dark-title mg20">
                                Have a voucher?
                            </p>
                            <TextField className="input"></TextField>
                            <Button
                                variant="contained"
                                className="dark-fill-light-background apply-voucher"
                            >
                                <p className="h8 medium white normal ">Apply</p>
                            </Button>
                        </div>
                        <Stack spacing={2}>
                            <p className="h6 medium dark-title mg10">
                                Order Summary
                            </p>
                            <div className="flex-space-between">
                                <p className="h7 regular dark-lightest95">
                                    Price
                                </p>
                                <p className="h7 regular dark-title">
                                    {formattedNumber(total)}
                                </p>
                            </div>
                            <div className="flex-space-between">
                                <p className="h7 regular dark-lightest95">
                                    Discount {discount}%
                                </p>
                                <p className="h7 regular red">
                                    {formattedNumber(total)}
                                </p>
                            </div>
                            <div className="flex-space-between">
                                <p className="h7 regular dark-lightest95">
                                    Total Price
                                </p>
                                <p className="h7 bold dark-title">
                                    {formattedNumber(total * (1 - discount / 100))}
                                </p>
                            </div>
                        </Stack>
                        <Divider />
                        <div>
                            <p className="h8 medium dark-lightest95">
                                Write a note
                            </p>
                        </div>
                        {/* <textarea className="input height80"></textarea> */}
                        <TextField
                            multiline
                            maxRows={4}
                            className="input"
                            placeholder="Fragile item, Electronics etc"
                        ></TextField>
                        <Button
                            variant="contained"
                            className="button-contained"
                            style={{ marginTop: "100px" }}
                            onClick={handleComplete}
                        >
                            <img
                                style={{ width: "20px", margin: "4px" }}
                                src={icons.Card_white}
                                alt=""
                            />
                            <p className="normal h7 regular white">
                                Proceed to Checkout
                            </p>
                        </Button>
                    </Stack>
                </div>
            </Stack>
            <div className="mg40">
            <div className="flex-space-between center">
                <p className="h4 medium dark-title">Maybe you like it too...</p>
                <Button variant="outlined" className="button-outlined">
                    <p className="indigo h7 regular normal">View All</p>
                </Button>
            </div>
            <Stack className="mg40" direction={"row"} spacing={8}>
                {recommend_product.map((item, index) => (
                    <Stack spacing={2}>
                        <div className="image-container flex-center">
                            <img height={100} src={item.image} alt="" />
                        </div>
                        <p className="h8 medium dark-title">{item.name}</p>
                        <div className="flex-space-between flex-row">
                            <p className="green h8 regular">
                                {formattedNumber(item.price)}
                            </p>
                            <div className="flex-row">
                                <Star color="warning" />
                                <p className="dark-lighter5a h8 regular">
                                    {item.rate}
                                </p>
                            </div>
                        </div>
                        <Button
                            variant="outlined"
                            className=" mg40 button-outlined"
                        >
                            <p className="indigo h7 regular normal">
                                Add to cart
                            </p>
                        </Button>
                    </Stack>
                ))}
            </Stack>
            </div>
        </Container>
    );
}

function CartCustomerInfo({ handleBack, handleComplete }) {
    return (
        <div className="flex-space-between">
            <Stack spacing={3}>
                <p className="h5 medium dark-title">Add Customer data</p>
                <Stack spacing={6} direction={"row"}>
                    <div>
                        <p className="h8 regular dark-title">First name</p>
                        <TextField
                            className="input firstname"
                            variant="outlined"
                            placeholder="Your first name"
                        ></TextField>
                    </div>
                    <div>
                        <p className="h8 regular dark-lighter5a">Last name</p>
                        <TextField
                            className="input firstname"
                            variant="outlined"
                            placeholder="Your last name"
                        ></TextField>
                    </div>
                </Stack>
                <Stack spacing={6} direction={"row"}>
                    <div>
                        <p className="h8 regular dark-title">Your Email</p>
                        <TextField
                            type="email"
                            placeholder="example@gmail.com"
                            className="input email firstname"
                            variant="outlined"
                        ></TextField>
                    </div>
                    <Stack spacing={2} direction={"row"}>
                        <div>
                            <p className="h8 regular dark-title">Phone number</p>
                            <Paper
                                className="phonenumber input non-box-shadown"
                                component={"form"}
                                sx={{ display: "flex", alignItems: "center" }}
                            >
                                <p className="h8 regular prefix-phone">+84</p>
                                <Divider
                                    sx={{ height: 28, m: 0.5 }}
                                    orientation="vertical"
                                />
                                <InputBase
                                    placeholder="000 000 000"
                                    className="input-phonenumber firstname"
                                />
                            </Paper>
                        </div>
                    </Stack>
                </Stack>
                <Stack spacing={6} direction={"row"}>
                    <div>
                        <p className="h8 regular dark-title">Country</p>
                        <TextField
                            className="input firstname"
                            variant="outlined"
                            placeholder="Viet Nam"
                        ></TextField>
                    </div>
                    <div>
                        <p className="h8 regular dark-lighter5a">City</p>
                        <TextField
                            className="input city"
                            variant="outlined"
                            placeholder="HCM"
                        ></TextField>
                    </div>
                    <div>
                        <p className="h8 regular dark-lighter5a">ZIP Code</p>
                        <TextField
                            className="input zip-code"
                            placeholder="123456"
                            variant="outlined"
                        ></TextField>
                    </div>
                </Stack>
                <div>
                    <p className="h8 regular dark-lighter5a">Address details</p>
                    <TextField
                        className="input firstname address"
                        variant="outlined"
                        placeholder="38 C1 Street Tan Binh"
                    ></TextField>
                </div>
                <div>
                    <FormControlLabel
                        className="check-box"
                        control={<Checkbox defaultChecked size="large" />}
                        label="Save this new address in Elma E-commerce"
                    />
                </div>
            </Stack>
            <OrderSummary handleBack={handleBack} handleComplete={handleComplete}/>
        </div>
        
    );
}

function ShippingPayment({ handleBack, handleComplete }) {
    const shipping = [
        {
            brand: "DHL Express",
            time_express: "Estimated delivery time: Jul 20 - Aug 03",
            old_cost: "",
            cost: "Free Shipping",
            image: logo.DHL,
        },
        {
            brand: "FedEx",
            time_express: "Estimated delivery time: Jul 20 - Aug 03",
            old_cost: 45,
            cost: 25,
            image: logo.FedEx,
        },
        {
            brand: "Express Expedition",
            time_express: "Estimated delivery time: Jul 20 - Aug 03",
            old_cost: 45,
            cost: 35,
            image: logo.Express,
        },
        {
            brand: "JNE Express",
            time_express: "Estimated delivery time: Jul 20 - Aug 03",
            old_cost: 45,
            cost: 35,
            image: logo.JNE,
        },
        {
            brand: "POS Indonesia",
            time_express: "Estimated delivery time: Jul 20 - Aug 03",
            old_cost: 45,
            cost: 35,
            image: logo.POS,
        },
    ];

    const payment_card = [{}];
    return (
        <Container className="mgpd0">
            {/* Choose Shipping Service & Payment with... */}
            <Stack spacing={2}>
                <div>
                    <div className="mg20">
                        <p className="h5 medium dark-title">
                            Choose Shipping Service
                        </p>
                        <p className="h8 regular dark-lightest95 mg10">
                            You can choose one best shipping service accross
                            your needs.
                        </p>
                    </div>
                    <FormControl>
                        <RadioGroup defaultValue={0}>
                            <Stack spacing={4}>
                                {shipping.map((item, index) => (
                                    <Stack
                                        direction={"row"}
                                        spacing={4}
                                        className="center"
                                    >
                                        <Stack direction={"row"}>
                                            <Radio size="large" value={index} />
                                            <div>
                                                <p className="h6 medium green">
                                                    {item.brand}
                                                </p>
                                                <p className="h8 regular dark-lightest95">
                                                    {item.time_express}
                                                </p>
                                            </div>
                                        </Stack>
                                        <div className="flex-row">
                                            <img
                                                height={20}
                                                src={icons.Dollar}
                                                alt=""
                                            />
                                            <p className="h7 medium green">
                                                Free Shipping
                                            </p>
                                        </div>
                                        <img src={item.image} alt="" />
                                    </Stack>
                                ))}
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="mg40">
                    <div>
                        <p className="h5 medium dark-title">Payment with..</p>
                        <p className="h8 regular dark-lightest95 mg10">
                            Choose what service you want for your transaction
                        </p>
                    </div>
                    <FormControl>
                        <RadioGroup defaultValue={0}>
                            <Container>
                                <Stack direction={"row"} spacing={10}>
                                    <div>
                                        <Radio size="large" value={0} />
                                        <div className="flex-row center">
                                            <p className="h6 medium dark-title">
                                                Credit Card
                                            </p>
                                            <img
                                                height={28}
                                                src={logo.Master_Card}
                                                alt=""
                                            />
                                            <img
                                                height={28}
                                                src={logo.Visa}
                                                alt=""
                                            />
                                        </div>
                                        <p className="h8 regular dark-lightest95">
                                            You can use all credit card service.
                                        </p>
                                        <p className="h8 regular dark-lightest95">
                                            We can accept Visa and Master Card.
                                        </p>
                                    </div>
                                    <div>
                                        <Radio size="large" value={1} />
                                        <div className="flex-row center">
                                            <p className="h6 medium dark-title">
                                                Pay Pal
                                            </p>
                                            <img
                                                height={28}
                                                src={logo.Paypal}
                                                alt=""
                                            />
                                        </div>
                                        <p className="h8 regular dark-lightest95">
                                            Insert your account email of paypal.
                                        </p>
                                        <p className="h8 regular dark-lightest95">
                                            We will process your payment.
                                        </p>
                                    </div>
                                </Stack>
                            </Container>
                        </RadioGroup>
                    </FormControl>
                    <div className="mg40">
                        <Stack spacing={9} direction={"row"}>
                            <div className="">
                                <p className="h8 regular dark-title mg10">
                                    Card name
                                </p>
                                <TextField
                                    className="input"
                                    placeholder="Eg. Join Elma"
                                ></TextField>
                            </div>
                            <div className="">
                                <p className="h8 regular dark-title mg10">
                                    Card number
                                </p>
                                <TextField
                                    className="input"
                                    placeholder="1234 5678 1234 5678"
                                ></TextField>
                            </div>
                        </Stack>
                        <Stack className="mg20" direction={"row"} spacing={3}>
                            <div className="month">
                                <p className="h8 regular dark-title mg10">
                                    Month
                                </p>
                                <Select
                                    style={{ width: "200px" }}
                                    className=""
                                    value={0}
                                >
                                    <MenuItem value={0}>Choose month</MenuItem>
                                    {/* <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={11}>11</MenuItem>
                                    <MenuItem value={12}>12</MenuItem> */}
                                </Select>
                            </div>
                            <div className="year">
                                <p className="h8 regular dark-title mg10">
                                    Year
                                </p>
                                <Select
                                    style={{ width: "200px" }}
                                    className=""
                                    value={0}
                                >
                                    <MenuItem value={0}>Choose year</MenuItem>
                                    {/* <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={11}>11</MenuItem>
                                    <MenuItem value={12}>12</MenuItem> */}
                                </Select>
                            </div>
                            <div className="cvv">
                                <p className="h8 regular dark-title mg10">
                                    CVV
                                </p>
                                <TextField
                                    placeholder="000"
                                    className="input"
                                    style={{ width: "80px" }}
                                ></TextField>
                            </div>
                        </Stack>
                        <Button
                            variant="contained"
                            className="mg20 height48 radius-8 dark-fill-light-background"
                        >
                            <p className="normal h7 medium white">
                                Submit Card Info
                            </p>
                        </Button>
                    </div>
                </div>
            </Stack>
        </Container>
    );
}

function Review({ handleBack, handleComplete }) {
    const info = [
        {
            avatar: "",
            name: "Join Elma",
            phone_number: "+1 218 128 991",
            address: "5690 Matilda Green Suite 672, New York, 12345",
        },
    ];

    const shipping = [
        {
            brand: "DHL Express",
            time_express: "Estimated delivery time: Jul 20 - Aug 03",
            old_cost: "",
            cost: "Free Shipping",
            image: logo.DHL,
        },
    ];

    const card = [
        {
            image: logo.Master_Card,
            name: "Credit Card",
            card_number: "**** 7282",
            expired: "8/2027",
        },
    ];
    return (
        <Container>
            {/* Shipping to */}
            <Stack>
                <div className="">
                    <div className="mg20">
                        <p className="h5 medium dark-title">Shipping to...</p>
                        <p className="h8 regular dark-lightest95 mg10">
                            Please check berofe you finalize your order
                        </p>
                    </div>
                </div>
                <div>
                    {info.map((item, index) => (
                        <Stack direction={"row"}>
                            <Avatar
                                sx={{ width: 56, height: 56 }}
                                src={item.avatar}
                            />
                            <Stack spacing={3}>
                                <div className="flex-space-between center">
                                    <div>
                                        <div className="flex-row center">
                                            <p className="h6 medium dark-title">
                                                {item.name}
                                            </p>
                                            <p className="h8 regular dark-lighter5a">
                                                {item.phone_number}
                                            </p>
                                            <img
                                                height={20}
                                                src={icons.Phone}
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-row center mg10">
                                            <img
                                                height={20}
                                                src={icons.Home}
                                                alt=""
                                            />
                                            <p className="h8 regular dark-lighter5a">
                                                {item.address}
                                            </p>
                                        </div>
                                    </div>
                                    <IconButton>
                                        <img src={icons.Edit} alt="" />
                                        <p>Edit info</p>
                                    </IconButton>
                                </div>

                                <div>
                                    {shipping.map((item, index) => (
                                        <Stack
                                            direction={"row"}
                                            spacing={4}
                                            className="center"
                                        >
                                            <Stack direction={"row"}>
                                                <div>
                                                    <p className="h6 medium dark-lighter5a">
                                                        {item.brand}
                                                    </p>
                                                    <p className="h8 regular dark-lightest95">
                                                        {item.time_express}
                                                    </p>
                                                </div>
                                            </Stack>
                                            <Stack
                                                direction={"row"}
                                                spacing={1}
                                            >
                                                <img
                                                    height={20}
                                                    src={icons.Dollar}
                                                    alt=""
                                                />
                                                <p className="h7 medium dark-lighter5a">
                                                    Free Shipping
                                                </p>
                                            </Stack>
                                            <img src={item.image} alt="" />
                                        </Stack>
                                    ))}
                                </div>
                            </Stack>
                        </Stack>
                    ))}
                </div>
            </Stack>

            {/* Payment method */}
            <Stack>
                <div className="">
                    <div className="flex-space-between mg20 center">
                        <p className="h5 medium dark-title">Payment method</p>
                        <Button variant="text">
                            <p className="normal h8 regular indigo mg10">
                                Change method
                            </p>
                        </Button>
                    </div>
                    {card.map((item, index) => (
                        <div className="flex-space-between center">
                            <div className="flex-row center">
                                <img height={50} src={item.image} alt="" />
                                <div>
                                    <div className="flex-row center">
                                        <p className="h6 medium dark-title">
                                            {item.name}
                                        </p>
                                        <p className="h8 regular dark-lighter5a">
                                            {/* {item.phone_number} */}
                                        </p>
                                    </div>
                                    <div className="flex-row center mg10">
                                        <p className="h8 regular dark-lighter5a">
                                            {item.card_number +
                                                "- Expired: " +
                                                item.expired}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <IconButton>
                                <img src={icons.Edit} alt="" />
                                <p>Edit info</p>
                            </IconButton>
                        </div>
                    ))}
                </div>
            </Stack>
        </Container>
    );
}
    /* Order Summary */
export function OrderSummary({ handleBack, handleComplete }) {
    return (
        <Stack spacing={2}>
            <div className="">
                <Stack className="mg40" spacing={3}>
                    {recommend_product.map((item, index) => (
                        <Stack spacing={3} direction={"row"} className="center">
                            <div
                                style={{ width: "50px", height: "50px" }}
                                className="image-container flex-center"
                            >
                                <img height={50} src={item.image} alt="" />
                            </div>
                            <div>
                                <p className="h8 medium dark-title">
                                    {item.name}
                                </p>
                                <div className="flex-space-between flex-row">
                                    <p className="green h8 regular">
                                        {
                                            formattedNumber(
                                                item.price
                                                
                                            )}
                                    </p>
                                    <div className="flex-row">
                                        <p className="dark-lighter5a h8 regular">
                                            1 item
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <IconButton>
                                <img width={30} src={icons.Trash_red} alt="" />
                            </IconButton>
                        </Stack>
                    ))}
                    <Stack spacing={2}>
                        <div className="flex-row flex-space-between">
                            <p className="h7 regular dark-lightest95">
                                Subtotal
                            </p>
                            <p className="h7 regular dark-title">
                                {formattedNumber(1750)}
                            </p>
                        </div>
                        <div className="flex-row flex-space-between">
                            <p className="h7 regular dark-lightest95">
                                Shipping
                            </p>
                            <p className="h7 regular dark-title">
                                {formattedNumber(1750)}
                            </p>
                        </div>
                        <div className="flex-row flex-space-between">
                            <p className="h7 regular dark-lightest95">Tax 8%</p>
                            <p className="h7 regular dark-title">
                                {formattedNumber(1750)}
                            </p>
                        </div>
                        <div className="flex-row flex-space-between">
                            <p className="h7 regular dark-lightest95">
                                Discount 10%
                            </p>
                            <p className="h7 regular red">
                                {formattedNumber(1750)}
                            </p>
                        </div>
                        <div className="flex-row flex-space-between">
                            <p className="h7 medium dark-title">Order Total</p>
                            <p className="h7 medium dark-title">
                                {formattedNumber(1750)}
                            </p>
                        </div>
                    </Stack>
                    <Button onClick={handleComplete} variant="contained" className="button-contained">
                        <img src={icons.Shipping_white} alt="" />
                        <p className="normal h7 medium white">
                            Continue to Shipping
                        </p>
                    </Button>
                    <Button onClick={handleBack} variant="outlined" className="button-outlined">
                        <img src={icons.Arror_left} alt="" />
                    </Button>
                </Stack>
            </div>
        </Stack>
    );
}


