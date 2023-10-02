import React, {  useState } from "react";
import styles from "../Users/User.module.css";
import ReactPaginate from "react-paginate";

const items = [
  {
    organization: "Lendsqr",
    username: "bode",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr1",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "inactive",
  },
  {
    organization: "Lendsqr2",
    username: "dayo",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "fumi",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr5",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr6",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr7",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr8",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneno: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
];

const tabContent = [
  {
    images: "images/img1.png",
    title: "USERS",
    number: "2,453",
  },
  {
    images: "images/img2.png",
    title: "ACTIVE USERS",
    number: "2,453",
  },
  {
    images: "images/img3.png",
    title: "USERS WITH LOANS",
    number: "2,453",
  },
  {
    images: "images/img3.png",
    title: "USERS WITH SAVINGS",
    number: "2,453",
  },
];

function Items({ usersData }) {
  return (

    
<div className={styles.secondContainer}>
<table>
 <thead>
<tr>
  <th>
  <div className={styles.thead}>
                      ORGANIZATION <img  className={styles.images} src="images/filter.png" alt="" />
                    </div>
                  </th>
                  <th>
                    <div className={styles.thead}>
                      USERNAME
                      <img  className={styles.images} src="images/filter.png" alt=" " />
                    </div>
                  </th>
                  <th>
                    <div className={styles.thead}>
                      EMAIL
                      <img   className={styles.images} src="images/filter.png" alt=" " />
                    </div>
                  </th>
                  <th>
                    <div className={styles.thead}>
                      PHONE NUMBER
                      <img  className={styles.images} src="images/filter.png" alt=" " />
                    </div>
                  </th>
                  <th>
                    <div className={styles.thead}>
                      DATE JOINED
                      <img  className={styles.images} src="images/filter.png" alt=" " />
                    </div>
                  </th>
                  <th>
                    <div className={styles.thead}>
                      STATUS
                      <img  className={styles.images} src="images/filter.png" alt=" " />
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
             
  
                {usersData && usersData.map((item, index) => (
                  <tr key={index.toString()} className={styles.tableData}>
                    <td>
                      <span className={styles.tdata}>{item.organization}</span>
                    </td>
                    <td>
                      <span className={styles.tdata}>{item.username}</span>
                    </td>
                    <td>
                      <span className={styles.tdata}>{item.email}</span>
                    </td>
                    <td>
                      <span className={styles.tdata}>{item.phoneno}</span>
                    </td>
                    <td>
                      <span className={styles.tdata}>i{item.datejoined}</span>
                    </td>
                    <td>
                      <div className={styles.tdata}> 
                         <div className={styles.tdata2}>
                        </div>
                     <div className={styles.pending}>
                     {item.status}
                     </div>
                     <img className={styles.images} src="images/more.png" alt="" /> 


                       </div> 
                      
                    </td> 

          </tr>
                ))}
              </tbody>
         
            </table>
          </div>
       
        
  );
}

function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const usersData = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items usersData={usersData} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
      activeClassName={styles.active}
      containerClassName={styles.containerclass}
      previousLinkClassName={styles.previous}
      nextClassName={styles.next}
      // previousClassName={styles.eachli}
       previousLabel="< "
     
     
        renderOnZeroPageCount={null}
      />
    </>
  );
}

const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userText}>Users</div>
      <div className={styles.Tabs}>


      
      {tabContent.map((item, index) => (
        <div className={styles.headTabs} key={index.toString()}>
          <div>
            <img className={styles.icon} src={item.images} alt={`images ${index}`} />
          </div>
          <div className={styles.title}>{item.title}</div>

          <div className={styles.number}>{item.number}</div>
         
        </div>
        
      ))}
      </div>
     
      <PaginatedItems itemsPerPage={8} />
   
    </div>
   
  );
};

export default Users;
