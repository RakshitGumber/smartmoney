import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navbar, Sidebar } from "../components";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Sidebar />
        <Outlet />
      </main>
    </React.Fragment>
  );
}
