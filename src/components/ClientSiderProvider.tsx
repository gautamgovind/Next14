"use client";
import { PropsWithChildren } from "react";

const ClientSiderProvider = ({children}: PropsWithChildren) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default ClientSiderProvider