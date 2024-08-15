import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const search = request.nextUrl.search;
    const lang = "ru";

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-pathname", pathname);
    requestHeaders.set("x-lang", lang);

    if (pathname.startsWith("/posts/news")) {
        if (pathname == "/posts/news") return NextResponse.rewrite(new URL("/news?type=1", request.url), { headers: requestHeaders });
        return NextResponse.rewrite(new URL(`/news/${pathname.replace("/posts/news/", "")}${search}`, request.url), { headers: requestHeaders });
    } else if (pathname.startsWith("/posts/ads")) {
        if (pathname == "/posts/ads") return NextResponse.rewrite(new URL("/news?type=2", request.url), { headers: requestHeaders });
        return NextResponse.rewrite(new URL(`/news/${pathname.replace("/posts/ads/", "")}${search}`, request.url), { headers: requestHeaders });
    } else if (pathname.startsWith("/posts/announces")) {
        if (pathname == "/posts/announces") return NextResponse.rewrite(new URL("/news?type=3", request.url), { headers: requestHeaders });
        return NextResponse.rewrite(new URL(`/news/${pathname.replace("/posts/announces/", "")}${search}`, request.url), { headers: requestHeaders });
    }

    // return NextResponse.rewrite(new URL(`/${lang}${pathname}`, request.nextUrl), { headers: requestHeaders });
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};
