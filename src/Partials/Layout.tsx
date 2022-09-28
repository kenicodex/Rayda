
import React from "react";
import Navbar from "./Navbar";

type LayoutProps = React.PropsWithChildren<{}>;

export default function Layout({ children, ...other }: LayoutProps) {
    return (
        <div {...other}>
            <Navbar />
            {children}
        </div>
    );
}