"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

// learn more about sessionprovider on next-auth
const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
