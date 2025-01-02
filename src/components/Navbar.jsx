import React from 'react';
import { Plane, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import useAuthStore from '../context/auth';

const Navbar = () => {
  const { user, isAuthenticated, signInWithGoogle, signOut } = useAuthStore();

  return (
    <div className="navbar bg-base-100 shadow-md h-[10vh]">
      <div className="navbar-start">
        <div className="flex items-center">
          <Plane className="mr-2 text-primary" size={24} />
          <Link to={'/'} className="btn btn-ghost text-xl font-bold">WanderWise</Link>
        </div>
      </div>
      <div className="navbar-end">
        {!isAuthenticated ? (
          <button 
            className="btn btn-ghost" 
            onClick={signInWithGoogle}
          >
            <User className="mr-2" size={20} />
            Sign In
          </button>
        ) : (
          <div className="flex items-center space-x-2">
            <button 
              className="btn btn-ghost btn-sm" 
              onClick={signOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
