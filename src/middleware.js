// middleware.js

import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();

  const host = request.nextUrl.hostname;
  response.headers.set("hostname", host);
  if (host === "") {
    response.headers.set("x-host", "true");
  }

  return response;
}
