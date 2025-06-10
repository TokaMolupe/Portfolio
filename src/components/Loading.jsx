import React from 'react';

function Loading() {
    return (
        <div class="p-24">
            <div className="mt-8 flex flex-col items-center text-lime-500 mb-10">
                <svg
                    className="w-16 h-16 animate-scaleFade "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="mt-5 text-lg font-semibold animate-fadeIn">
                    Thank you — your message has been received. We’ll get back to you shortly with a response.
                </p>
            </div>
            <div className="flex justify-center items-center min-w-full">
                <button
                    type="button"
                    className="bg-gray-400 md:bg-transparent md:shadow-md md:shadow-lime-500 text-white font-semibold p-4 md:px-10 md:py-6 rounded flex items-center"
                    disabled
                >
                    <svg
                        className="animate-spin h-5 w-5 mr-2 text-white md:text-lime-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                        />
                    </svg>
                    Redirecting...
                </button>
            </div>
        </div>
    )
}

export default Loading;