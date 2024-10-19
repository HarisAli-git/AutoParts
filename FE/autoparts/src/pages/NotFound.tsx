import React from "react";
import { ERRORS } from "../constants";

const NotFound: React.FC = () => (
  <div className="flex items-center justify-center h-screen">
    <h1 className="text-4xl font-bold text-white">{ERRORS.page_not_found}</h1>
  </div>
);

export default NotFound;
