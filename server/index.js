// Importing env Variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

// microservice routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";
import Menu from "./API/Menu";
import Order from "./API/Orders";
import Reviews from "./API/User";
import User from "./API/us";

// Database connection
import ConnectDB from "./database/connection";

const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// passport cofiguration
googleAuthConfig(passport);
routeConfig(passport);

// Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);
zomato.use("/user", User);

zomato.get("/", (req, res) => res.json({ message: "Setup success" }));

zomato.listen(4000, () =>
  ConnectDB()
    .then(() => console.log("Server is running"))
    .catch(() =>
      console.log("Server is running, but database connection failed... ")
    )
);
