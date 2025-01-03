import React, { useState, useRef } from 'react';
import { 
  Mic, 
  Upload, 
  FileText, 
  Download, 
  Copy, 
  Check, 
  X, 
  Loader2, 
  CloudUpload,
  Globe,
  Award,
  Zap,
  Lock,
  Users,
  Headphones,
  Shield,
  Rocket,
  Cpu,
  Target
} from 'lucide-react';

// Marketing Plans
const MARKETING_PLANS = [
  {
    title: 'Starter',
    features: [
      '5 hours free transcription',
      'Basic AI accuracy (90%)',
      'Limited export options',
      'Community support'
    ],
    price: 'Free',
    badgeColor: 'bg-gray-200 text-gray-800'
  },
  {
    title: 'Pro',
    features: [
      'Unlimited transcriptions',
      '99.5% AI accuracy',
      'Multiple format exports',
      'Priority support',
      'Advanced analytics'
    ],
    price: '$49.90/month',
    badgeColor: 'bg-blue-500 text-white',
    recommended: true
  },
  {
    title: 'Enterprise',
    features: [
      'Unlimited team seats',
      'Custom AI model',
      '24/7 dedicated support',
      'Advanced security',
      'API access',
      'Compliance certifications'
    ],
    price: 'Custom Pricing',
    badgeColor: 'bg-purple-500 text-white'
  }
];

// Powerful Features
const POWERFUL_FEATURES = [
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: 'Transcribe in 25+ languages with context-aware AI',
    color: 'text-green-600'
  },
  {
    icon: Cpu,
    title: 'Advanced AI',
    description: 'Machine learning models continuously improving accuracy',
    color: 'text-blue-600'
  },
  {
    icon: Rocket,
    title: 'Lightning Fast',
    description: 'Real-time transcription with minimal processing time',
    color: 'text-red-600'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'End-to-end encryption, GDPR & CCPA compliant',
    color: 'text-purple-600'
  }
];

// Testimonials
const TESTIMONIALS = [
  {
    name: "Emily Rodriguez",
    role: "Research Journalist",
    company: "Global Insights Magazine",
    quote: "TranscribeAI transformed our research workflow. The accuracy is mind-blowing!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    company: "TechInnovate",
    quote: "As a founder, time is my most valuable resource. This tool saves me hours every week.",
    rating: 5
  }
];

const AudioTranscriptionApp = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const [transcription, setTranscription] = useState('');
  const [isTranscribing, setIsTranscribing] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setAudioFile(audioBlob);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Microphone access error:', error);
      alert('Could not access microphone. Please check permissions.');
    }
  };

  const handleTranscribe = async () => {
    if (!audioFile) return;

    setIsTranscribing(true);
    try {
      // Simulated transcription
      await new Promise(resolve => setTimeout(resolve, 2000));
      setTranscription(`Transcription Result:

[Simulated high-accuracy transcription]

Processed at: ${new Date().toLocaleString()}
Estimated Accuracy: 99.7%
Processing Time: 2.3 seconds

Powered by TranscribeAI Advanced AI`);
    } catch (error) {
      console.error('Transcription error:', error);
      alert('Transcription failed. Please try again.');
    } finally {
      setIsTranscribing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Headphones className="h-8 w-8 text-blue-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">TranscribeAI</h1>
        </div>
        <nav className="hidden md:flex space-x-4 items-center">
          <a href="#features" className="text-blue-600 hover:text-blue-800">Features</a>
          <a href="#pricing" className="text-blue-600 hover:text-blue-800">Pricing</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Start Free Trial
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="text-center mb-16 max-w-4xl">
          <h2 className="text-5xl font-bold mb-6 text-gray-800">
            Transcribe Any Audio with 99.9% Accuracy
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Powered by cutting-edge AI. Transform interviews, meetings, lectures into text instantly.
          </p>
        </section>

        {/* Transcription Area */}
        <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-2xl mb-16">
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <button 
              onClick={startRecording}
              className="bg-red-500 text-white px-6 py-3 rounded-full flex items-center justify-center hover:bg-red-600 transition"
            >
              <Mic className="mr-2" /> Start Recording
            </button>

            <label className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
              <Upload className="mr-2" /> Upload File
              <input 
                type="file" 
                accept="audio/*" 
                className="hidden"
              />
            </label>
          </div>

          <div className="text-center mt-6">
            <button 
              onClick={handleTranscribe}
              className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition"
            >
              Transcribe Now
            </button>
          </div>
        </div>

        {/* Powerful Features */}
        <section className="w-full max-w-6xl mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Why TranscribeAI?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {POWERFUL_FEATURES.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md text-center group hover:shadow-lg transition"
              >
                <feature.icon className={`mx-auto h-12 w-12 mb-4 ${feature.color}`} />
                <h4 className="font-bold mb-2 text-xl">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="w-full max-w-6xl mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Flexible Pricing</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {MARKETING_PLANS.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-xl shadow-lg text-center relative ${
                  plan.recommended ? 'border-4 border-blue-500' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</p>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <Check className="mr-2 text-green-500" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full hover:opacity-90 transition ${plan.badgeColor}`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full max-w-6xl mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Users Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg flex flex-col"
              >
                <p className="italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full max-w-6xl bg-blue-600 text-white p-16 rounded-xl text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Boost Your Productivity?</h3>
          <p className="text-xl mb-8">Start your free trial and experience the future of transcription</p>
          <button className="bg-white text-blue-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition">
            Start Free Trial
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">TranscribeAI</h4>
            <p>Revolutionizing audio transcription with AI</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Features</a></li>
              <li><a href="#" className="hover:text-blue-300">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-300">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-300">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p>support@transcribeai.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="text-center mt-8">
          © 2024 TranscribeAI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AudioTranscriptionApp;
