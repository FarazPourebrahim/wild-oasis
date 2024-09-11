import Link from "next/link";

export default function NotFound() {
    return (
        <main className='text-center space-y-6 mt-4'>
            <div className="max-w-6xl mx-auto mt-8">
                <h1 className="text-4xl font-bold text-center text-red-600">
                    Cabin not found
                </h1>
                <p className="text-lg text-center mt-4">
                    The cabin you are looking for does not exist or has been removed.
                </p>
            </div>
            <Link
                href='/cabins'
                className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'
            >
                Go back
            </Link>
        </main>
    );
}