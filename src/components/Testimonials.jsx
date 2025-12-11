import React from 'react';
import { Star } from 'lucide-react';

const defaultReviews = [
    {
        text: "The detail and finish is simply outstanding. We effectively have a new room outdoors. The team was polite, tidy, and the planting scheme is blooming beautifully.",
        author: "The Anderson Family",
        location: "Surrey",
        rating: 5,
        role: "Garden Transformation"
    },
    {
        text: "We didn't just want a patio; we wanted a design. Eden Landscapes provided 3D visualizations that blew us away. The reality looks exactly like the render.",
        author: "Mr. J. Wright",
        location: "Guildford",
        rating: 5,
        role: "Design Client"
    },
    {
        text: "Transformed our muddy backyard into a stunning entertaining space. The porcelain paving is flawless.",
        author: "Sarah & Tom",
        location: "Woking",
        rating: 5,
        role: "Patio & Living"
    }
];

const Testimonials = ({ reviews = defaultReviews }) => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-accent">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Trusted by your community
                    </p>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {reviews.map((review, index) => (
                        <div key={index} className="flex flex-col justify-between bg-white p-8 shadow-sm ring-1 ring-gray-900/5 sm:rounded-2xl sm:p-10 hover:shadow-md transition-shadow">
                            <div className="flex gap-1 mb-4 text-accent">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <blockquote className="text-gray-900 text-lg leading-8 grow">
                                <p>“{review.text}”</p>
                            </blockquote>
                            <div className="mt-8 flex items-center gap-x-4">
                                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500">
                                    {review.author.charAt(0)}
                                </div>
                                <div className="text-sm leading-6">
                                    <div className="font-semibold text-gray-900">{review.author}</div>
                                    <div className="text-gray-600">{review.role || review.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
