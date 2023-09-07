import React, { useState } from "react";
import Sidebar from "./sidebar";

const Dashboard = ({ id }: { id: string }) => {
  return <Sidebar id={id} />;
};

export default Dashboard;
