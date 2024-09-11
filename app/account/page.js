import {auth} from "@/app/_lib/auth";

export const metadata = {
    title: "Account",
}

export default async function Page() {
    const session = await auth();
    console.log(session)

    return (
        <div>
            <h1>
                Welcome, {session.user.name}
            </h1>
        </div>
    )
}