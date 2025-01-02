import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../context/auth';

const Hero = () => {
  const navigate = useNavigate();
  const { isAuthenticated, signInWithGoogle } = useAuthStore();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/createtrip');
    } else {
      signInWithGoogle();
    }
  };

  return (
    <div className='w-full h-[90vh] flex items-center justify-center bg-gradient-to-br from-base-200 to-base-100'>
      <div className='text-center max-w-4xl px-4'>
        <h1 className='text-4xl md:text-6xl font-bold mb-6 text-primary'>
          Discover Your Next Adventure with AI
        </h1>
        <p className='text-xl md:text-2xl mb-8 text-base-content opacity-80'>
          Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
        </p>
        <div className='flex justify-center space-x-4'>
          <button 
            className='btn btn-primary btn-lg'
            onClick={handleGetStarted}
          >
            <Sparkles className='mr-2' />
            Get Started, It's Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
