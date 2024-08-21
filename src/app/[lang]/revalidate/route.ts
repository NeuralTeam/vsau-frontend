import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
    const headersStore = headers();
    const token = headersStore.get("X-Revalidation-Token");

    if (token === null)
        return new Response("error: header 'X-Revalidation-Token' is required", {
            status: 422
        });

    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get("page");

    if (page === null)
        return new Response("error: query 'page' is required", {
            status: 422
        });

    if (token !== process.env.REVALIDATION_TOKEN)
        return new Response("error: invalid token", {
            status: 401
        });

    revalidatePath(page);

    return new Response("OK", {
        status: 200
    });
}
