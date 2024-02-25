import React, { useEffect, useState } from "react";
import "./Category.scss";
import { Button, Container, Grid, Stack } from "@mui/material";
import {
    CameraAltRounded,
    Checkroom,
    Favorite,
    LocalAtm,
    PhoneAndroidRounded,
    PhoneIphoneRounded,
    SportsBaseball,
    SportsEsports,
    Tv,
} from "@mui/icons-material";
import { getAllCategories } from "../../../utils/appService";
import { images } from "../../../assets/images";

const items = [
    {
        Img: PhoneIphoneRounded,
        Name: "Category Name",
        View: "2,3k items",
    },
    {
        Img: CameraAltRounded,
        Name: "Category Name",
        View: "2,3k items",
    },
    {
        Img: Tv,
        Name: "Category Name",
        View: "2,3k items",
    },
    {
        Img: Checkroom,
        Name: "Category Name",
        View: "2,3k items",
    },
    {
        Img: SportsEsports,
        Name: "Category Name",
        View: "2,3k items",
    },
    {
        Img: SportsBaseball,
        Name: "Category Name",
        View: "2,3k items",
    },
];

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getAllCategories();
                setCategories(
                    response.map((category) => ({
                        icon: category.icon,
                        Name: category.name,
                        Id: category._id, // Assuming you have an _id field in your Category model
                        View: "2,3k items", // Replace with actual view count logic
                    })),
                );
            } catch (err) {
                console.error("Error fetching categories:", err);
            }
        };

        fetchCategories();
    }, []); 

    return (
        <Container className="category" maxWidth="lg">
            <Stack className="stack1">
                <Stack className="name" direction={"row"}>
                    <p className="namecate h2 medium">Category</p>
                    <Button className=" " variant="outlined" href="/categories">
                        <p className="normal h7 medium indigo">View All</p>
                    </Button>
                </Stack>
            </Stack>
            <Stack className="stack2">
                <Grid container spacing={2}>
                    {
                        categories.map((category, index) => {
                            return (
                                <Grid item xs={2}>
                                    <Stack className="stack" spacing={3}>
                                        {/* <item.Img className="icon" /> */}
                                        <img
                                            width={50}
                                            src={category.icon}
                                            alt=""
                                        />

                                        <Stack className="namecnt" spacing={1}>
                                            <p className="name ">
                                                {category.Name}
                                            </p>
                                            <p className="content ">
                                                {category.View}
                                            </p>
                                        </Stack>
                                    </Stack>
                                </Grid>
                            );
                        })
                        .slice(0, 6)
                    }
                </Grid>
            </Stack>
        </Container>
    );
};

export default Category;
