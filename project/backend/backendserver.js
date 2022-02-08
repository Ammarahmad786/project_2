import express from "express";
import medicinedatas from "./Routes/medicine.js";
const medapp = express();
medapp.get("/", (res, req) => {
  console.log("Api is working");
});
medapp.get("/api/medicine", medicinedatas);

medapp.listen("5000", () => {
  console.log(`Application is running on 5000 port`);
});
export default medapp;
