import { NextResponse } from "next/server";

export function GET(request: Request) {
  const requestUrl = new URL(request.url);

  return NextResponse.redirect(new URL("/account", requestUrl.origin));
}
