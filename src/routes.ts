import express from "express";

const routes = express.Router();

routes.get("/users", (req, res, next) => {
  console.log("Acessou a rota");
  return res.json({ user: "john" });
});

export default routes;
