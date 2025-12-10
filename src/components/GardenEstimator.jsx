import React, { useState } from 'react';
import {
    Flower2, Shovel, Trees, Scissors,
    Banknote, Calendar, Sun, CheckCircle2,
    ArrowRight, ArrowLeft, UploadCloud
} from 'lucide-react';

const GardenEstimator = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        serviceType: '',
        gardenSize: '',
        budget: '',
        features: [],
        name: '',
        email: '',
        phone: '',
        postcode: ''
    });

    const updateData = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const toggleFeature = (option) => {
        setFormData(prev => {
            const current = prev.features;
            if (current.includes(option)) {
                return { ...prev, features: current.filter(item => item !== option) };
            }
            return { ...prev, features: [...current, option] };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Garden project details captured!");
    };

    const QuestionStep = ({ title, subtitle, children }) => (
        <div className="animate-fade-in space-y-6">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                <p className="text-gray-500 mt-2">{subtitle}</p>
            </div>
            {children}
        </div>
    );

    return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-3xl mx-auto border border-gray-100">

            {/* Progress Bar */}
            <div className="bg-green-50 px-8 py-4 border-b border-green-100 flex justify-between items-center">
                <span className="text-sm font-semibold text-green-700 tracking-wider uppercase">
                    Step {step} of 5
                </span>
                <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-green-600 transition-all duration-500 ease-out"
                        style={{ width: `${(step / 5) * 100}%` }}
                    />
                </div>
            </div>

            <div className="p-8 md:p-12 min-h-[400px] flex flex-col justify-center">

                {/* Step 1: Service Type */}
                {step === 1 && (
                    <QuestionStep
                        title="What does your garden need?"
                        subtitle="Choose the main goal for your outdoor space."
                    >
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: Trees, label: 'Full Landscaping', value: 'landscaping' },
                                { icon: Shovel, label: 'Paving / Patio', value: 'paving' },
                                { icon: Flower2, label: 'Planting Scheme', value: 'planting' },
                                { icon: Scissors, label: 'Maintenance Plan', value: 'maintenance' }
                            ].map((opt) => (
                                <button
                                    key={opt.value}
                                    onClick={() => { updateData('serviceType', opt.value); nextStep(); }}
                                    className={`p-6 rounded-xl border-2 transition-all flex items-center gap-4 text-left group hover:shadow-md
                    ${formData.serviceType === opt.value
                                            ? 'border-green-600 bg-green-50'
                                            : 'border-gray-100 hover:border-green-200'}`}
                                >
                                    <div className={`p-3 rounded-full ${formData.serviceType === opt.value ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-500 group-hover:text-green-600 group-hover:bg-green-50'}`}>
                                        <opt.icon size={24} />
                                    </div>
                                    <span className="font-semibold text-gray-900 text-lg">{opt.label}</span>
                                </button>
                            ))}
                        </div>
                    </QuestionStep>
                )}

                {/* Step 2: Garden Size */}
                {step === 2 && (
                    <QuestionStep
                        title="How big is the area?"
                        subtitle="An approximate guess helps us estimate materials."
                    >
                        <div className="space-y-4">
                            {['Small Courtyard (up to 20m²)', 'Medium Garden (20-100m²)', 'Large Estate (100m²+)'].map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => { updateData('gardenSize', opt); nextStep(); }}
                                    className={`w-full p-5 rounded-xl border-2 transition-all flex items-center justify-between group hover:shadow-md
                    ${formData.gardenSize === opt
                                            ? 'border-green-600 bg-green-50'
                                            : 'border-gray-100 hover:border-green-200'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <Sun className={`${formData.gardenSize === opt ? 'text-green-600' : 'text-gray-400 group-hover:text-green-600'}`} />
                                        <span className="font-bold text-gray-900 text-lg">{opt}</span>
                                    </div>
                                    <ArrowRight className={`opacity-0 group-hover:opacity-100 transition-opacity ${formData.gardenSize === opt ? 'text-green-600 opacity-100' : 'text-gray-400'}`} />
                                </button>
                            ))}
                        </div>
                        <button onClick={prevStep} className="mt-8 flex items-center gap-2 text-gray-400 hover:text-gray-600 font-medium">
                            <ArrowLeft size={16} /> Back
                        </button>
                    </QuestionStep>
                )}

                {/* Step 3: Budget */}
                {step === 3 && (
                    <QuestionStep
                        title="Do you have a budget in mind?"
                        subtitle="We can tailor the materials to fit your investment."
                    >
                        <div className="grid gap-4">
                            {[
                                { label: 'Under £5k', desc: 'Refresh & Maintenance' },
                                { label: '£5k - £15k', desc: 'New Patios & Features' },
                                { label: '£15k - £50k', desc: 'Complete Transformation' },
                                { label: '£50k+', desc: 'Luxury Landscape Design' }
                            ].map((opt) => (
                                <button
                                    key={opt.label}
                                    onClick={() => { updateData('budget', opt.label); nextStep(); }}
                                    className={`p-6 rounded-xl border-2 transition-all text-left group hover:shadow-md
                    ${formData.budget === opt.label
                                            ? 'border-green-600 bg-green-50'
                                            : 'border-gray-100 hover:border-green-200'}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <Banknote className={`mt-1 ${formData.budget === opt.label ? 'text-green-600' : 'text-gray-400 group-hover:text-green-600'}`} />
                                        <div>
                                            <div className="font-bold text-gray-900 text-lg">{opt.label}</div>
                                            <div className="text-gray-500 text-sm mt-1">{opt.desc}</div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                        <button onClick={prevStep} className="mt-8 flex items-center gap-2 text-gray-400 hover:text-gray-600 font-medium">
                            <ArrowLeft size={16} /> Back
                        </button>
                    </QuestionStep>
                )}

                {/* Step 4: Key Features */}
                {step === 4 && (
                    <QuestionStep
                        title="What features would you like?"
                        subtitle="Select all the elements you're dreaming of."
                    >
                        <div className="grid md:grid-cols-2 gap-4">
                            {['Natural Stone Patio', 'Composite Decking', 'New Lawn / Turf', 'Water Feature', 'Lighting Scheme', 'Pergola / Timber'].map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => toggleFeature(opt)}
                                    className={`p-5 rounded-xl border-2 transition-all flex items-center gap-4 text-left
                    ${formData.features.includes(opt)
                                            ? 'border-green-600 bg-green-50 ring-1 ring-green-600'
                                            : 'border-gray-100 hover:border-green-200'}`}
                                >
                                    <div className={`h-6 w-6 rounded border flex items-center justify-center transition-colors 
                    ${formData.features.includes(opt) ? 'bg-green-600 border-green-600 text-white' : 'border-gray-300 bg-white'}`}>
                                        {formData.features.includes(opt) && <CheckCircle2 size={14} />}
                                    </div>
                                    <span className="font-semibold text-gray-700">{opt}</span>
                                </button>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-8">
                            <button onClick={prevStep} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 font-medium">
                                <ArrowLeft size={16} /> Back
                            </button>
                            <button
                                onClick={nextStep}
                                className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-lg flex items-center gap-2"
                            >
                                Continue <ArrowRight size={20} />
                            </button>
                        </div>
                    </QuestionStep>
                )}

                {/* Step 5: Contact Details */}
                {step === 5 && (
                    <QuestionStep
                        title="Your Garden Awaits"
                        subtitle="Enter your details to receive your preliminary estimate."
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.name}
                                        onChange={e => updateData('name', e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all"
                                        placeholder="e.g. Sarah Green"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={e => updateData('email', e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all"
                                        placeholder="sarah@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        required
                                        type="tel"
                                        value={formData.phone}
                                        onChange={e => updateData('phone', e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all"
                                        placeholder="07700 900 123"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Project Postcode</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.postcode}
                                        onChange={e => updateData('postcode', e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition-all"
                                        placeholder="e.g. GU1..."
                                    />
                                </div>
                            </div>

                            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:border-green-400 hover:bg-green-50 transition-all">
                                <UploadCloud className="mx-auto text-gray-400 mb-2" size={32} />
                                <p className="text-sm font-medium text-gray-600">Optional: Upload Space Photos</p>
                                <p className="text-xs text-gray-400 mt-1">PDF, JPG, PNG up to 10MB</p>
                            </div>

                            <div className="flex justify-between items-center mt-8">
                                <button type="button" onClick={prevStep} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 font-medium">
                                    <ArrowLeft size={16} /> Back
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-xl flex items-center gap-2 text-lg"
                                >
                                    Get Design Consultation
                                </button>
                            </div>

                        </form>
                    </QuestionStep>
                )}

            </div>
        </div>
    );
};

export default GardenEstimator;
