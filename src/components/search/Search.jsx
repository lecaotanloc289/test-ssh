import {
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { ElmaBreadCrumbs } from "../categories/Categories";
import icons from "../../assets/icons";
import {
  Grid4x4Rounded,
  GridOnRounded,
  ProductionQuantityLimits,
  Star,
  StarBorderRounded,
} from "@mui/icons-material";
import "./Search.scss";
import { images } from "../../assets/images";
import logo from "../../assets/logo";

function Search() {
  return (
    <Container maxWidth="lg">
      <Search1 />
      <Divider />
      <Search2 />
    </Container>
  );
}

export function Search1() {
  return (
    <Stack className="flex-row flex-space-between">
      <div>
        <ElmaBreadCrumbs />
        <p className="h2 medium">Search result for `{"Macbook Pro"}`</p>
      </div>
      <Stack className="flex" direction={"row"} spacing={2}>
        <ButtonGroup variant="outlined">
          <Button
            className="dark-fill-light-background button44"
            variant="contained"
          >
            <img src={icons.Grid} alt="" />
          </Button>
          <Button className="button44" variant="none">
            <img color="white" src={icons.List} alt="" />
          </Button>
        </ButtonGroup>
        <Button
          className="dark-fill-light-background button44 normal"
          variant="contained"
        >
          <img src={icons.Product} alt="" />
          <p className="h81 regular ">Product</p>
        </Button>
        <Button className=" button44 border-1-solid normal" variant="outlined">
          <img src={icons.Store} alt="" />
          <p className="h81 regular dark-lightest95">Store</p>
        </Button>
      </Stack>
    </Stack>
  );
}

export function Search2() {
  return (
    <Stack direction={"row"} spacing={4}>
      <FilterOptions />
      <Result />
    </Stack>
  );
}

export function FilterOptions() {
  const category = [
    {
      icon: icons.HeadPhones,
      title: "Category 01",
    },
    {
      icon: icons.Computer,
      title: "Item Category 01",
    },
    {
      icon: icons.Phone,
      title: "Category list 03",
    },
    {
      icon: icons.Healthy,
      title: "Category 04",
    },
    {
      icon: icons.Camera,
      title: "Item Category 05",
    },
    {
      icon: icons.MensFashion,
      title: "Category list 06",
    },
    {
      icon: icons.Add,
      title: "See all categories",
    },
  ];

  const popular_filter = [
    {
      label: "4 star or upper",
    },
    {
      label: "Same day delivery",
    },
    {
      label: "Super seller",
    },
    {
      label: "Sale Product",
    },
  ];

  const price_value = [
    {
      value: "0 - 150",
    },
    {
      value: "150 - 300",
    },
    {
      value: "300 - 500",
    },
    {
      value: "500 - 1k",
    },
  ];
  return (
    <Card
      className="radius-8 filter-options"
      orientation="vertical"
      variant="outlined"
    >
      <Stack spacing={2}>
        <Stack>
          <p className="h5 medium dark-title mgt4">Filter Options</p>
          <Stack spacing={1}>
            <p className="h7 medium dark-title mgt4">Popular Filter</p>
            <FormGroup className="popular-options">
              {popular_filter.map((item, index) => (
                <FormControlLabel
                  className="dark-lighter5a"
                  control={<Checkbox size="large" />}
                  label={item.label}
                />
              ))}
            </FormGroup>
          </Stack>
        </Stack>
        <Divider />
        <Stack spacing={2}>
          <p className="h7 medium dark-title mgt4">Category</p>
          {category.map((item, index) => (
            <Stack className="flex-space-between" direction={"row"} spacing={2}>
              <Stack direction={"row"} spacing={1}>
                <img src={item.icon} alt="" />{" "}
                <p className="h7 regular dark-lighter5a mgt4">{item.title}</p>
              </Stack>
              <img src={icons.Chevron_down} alt="" />
            </Stack>
          ))}
        </Stack>
        <Divider />
        <Stack spacing={1}>
          <p className="h7 medium dark-title mgt4">Price Value</p>
          <Card className="height48">
            <Button className="button-48-lighter">
              <img src={icons.Dollar} alt="" />
            </Button>
            {/* <TextField
              placeholder="Set Min Price"
              className="input"
            ></TextField> */}
          </Card>
          <Card className="height48">
            <Button className="button-48-lighter">
              <img src={icons.Dollar} alt="" />
            </Button>
            {/* <TextField
              placeholder="Set Max Price"
              className="input"
            ></TextField> */}
          </Card>
          <Stack spacing={1}>
            {price_value.map((i, ind) => (
              <Button variant="outlined">
                <p className="h8 regular dark-lighter95">{i.value}</p>
              </Button>
            ))}
          </Stack>
        </Stack>
        <Divider />
        <Stack spacing={1}>
          <p className="h7 medium dark-title mgt4">Product Color</p>
        </Stack>
      </Stack>
    </Card>
  );
}

export function Result() {
  const [_filter, setFilter] = React.useState("");
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const store = [
    {
      name: "Apple Store Official",
      logo: logo.Apple,
      tag: "Featured store",
      sold: "10,5k",
      store_rating: 4.6,
    },
  ];

  const products = [
    {
      iamge: images.Macbook1,
      price: 1725,
      name: "Macbook Pro 2018",
      favorite: false,
      name_store: "Apple Store Official",
      rating: 4.6,
    },
    {
      iamge: images.Macbook2,
      price: 1725,
      name: "Macbook Pro 2018",
      favorite: false,
      name_store: "Apple Store Official",
      rating: 4.6,
    },
    {
      iamge: images.Macbook3,
      price: 1725,
      name: "Macbook Pro 2018",
      favorite: false,
      name_store: "Apple Store Official",
      rating: 4.6,
    },
    {
      iamge: images.Macbook3,
      price: 1725,
      name: "Macbook Pro 2018",
      favorite: false,
      name_store: "Apple Store Official",
      rating: 4.6,
    },
    {
      iamge: images.Macbook2,
      price: 1725,
      name: "Macbook Pro 2018",
      favorite: false,
      name_store: "Apple Store Official",
      rating: 4.6,
    },
    {
      iamge: images.Macbook1,
      price: 1725,
      name: "Macbook Pro 2018",
      favorite: false,
      name_store: "Apple Store Official",
      rating: 4.6,
    },
    {
      iamge: images.Macbook2,
      price: 1725,
      name: "Macbook Pro 2018",
      favorite: false,
      name_store: "Apple Store Official",
      rating: 4.6,
    },
    {
      iamge: images.Macbook3,
      price: 1725,
      name: "Macbook Pro 2018",
      favorite: false,
      name_store: "Apple Store Official",
      rating: 4.6,
    },
    {
      iamge: images.Macbook1,
      price: 1725,
      name: "Macbook Pro 2018",
      favorite: false,
      name_store: "Apple Store Official",
      rating: 4.6,
    },
  ];
  return (
    <Container className="">
      <div className="flex-space-between">
        <p className="h7 regular dark-lighter5a">
          Show 1 - 20 item form 500 total for `macbok pro`
        </p>
        <Stack direction={"row"}>
          <p className="h7 regular dark-lighter95">Sort by: </p>
          <FormControl fullWidth>
            <Select value={_filter} label="" onChange={handleChange}>
              <MenuItem value={1}>
                <p className="h7 medium dark-title">Highest rating</p>
              </MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </div>

      <Grid container spacing={2}>
        {store.map((item, index) => (
          <Card variant="outlined" c>
            <Stack spacing={4} lassName="store">
              <img width={64} src={item.logo} alt="" />

              <Stack direction={"row"}>
                <img src={icons.BestPrices} alt="" />
                <p className="h8 regular green">{item.tag}</p>
              </Stack>

              <p className="h6 medium dark-title">{item.name}</p>
              <Card className="white-fill-lighter" variant="none">
                <Stack className="flex-row" direction={"row"}>
                  <div>
                    <p className="h8 medium dark-title">{item.sold}</p>
                    <p className="h9 regular dark-lightest95">Product sold</p>
                  </div>
                  <div>
                    <Stack direction={"row"}>
                      <StarBorderRounded />
                      <p className="h8 medium dark-title">
                        {item.store_rating}
                      </p>
                    </Stack>
                    <p className="h9 regular dark-lightest95">Store rating</p>
                  </div>
                </Stack>
              </Card>
              <Button variant="contained" fullWidth className="indigo">
                <p className="normal h7 medium white">View Store</p>
              </Button>
            </Stack>
          </Card>
        ))}
        <Grid sm={4}>
          <Card></Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Search;
