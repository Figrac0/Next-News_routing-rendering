import { NextResponse } from "next/server";

function middleware(request) {
    console.log(request);
    return NextResponse.next();
}

export default middleware;
