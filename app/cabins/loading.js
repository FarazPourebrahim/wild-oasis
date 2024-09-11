import Spinner from "@/app/_components/Spinner";

export default function Loading() {
    return (
        <div className="grid items-center justify-center">
            <Spinner/>
            <p>Loading Cabin data...</p>
        </div>
    )
}