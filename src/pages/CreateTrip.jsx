import React, { useEffect, useState  } from 'react'
import { MapPin, Calendar, User, Plane, Globe, Compass ,LoaderCircle, } from 'lucide-react'
import {useTripstore} from '../context/trip'
import toast from 'react-hot-toast'
import {useNavigate}  from 'react-router-dom'

const CreateTrip = () => {
   
  const {resetTrip,handleSubmit,submitted,travelGroup,setTripDays,fetchLocationSuggestions,setLocation ,locationSuggestions,setTravelGroup ,setBudget , location ,tripDays ,budget ,setLocationSuggestions,isSubmitting} = useTripstore()
  const navigate = useNavigate()

  useEffect(() => {
    resetTrip()
  }, [])

  useEffect(() => {
    if (submitted) {
      navigate('/trip');
    }
  }, [submitted, navigate]);
  
  const validateForm =  (e) => {
    e.preventDefault()
    const errors = []
    if (!location.trim()) errors.push('Location is required')
    if (!tripDays) errors.push('Trip days is required')
    if (!travelGroup) errors.push('Travel group is required')
    if (!budget) errors.push('Budget is required')
    if (parseInt(tripDays) > 10) errors.push('Trip days cannot exceed 10 days')
    
    if(errors.length > 0)
    {
      errors.forEach(error => toast.error(error))
      return false
    }
    else 
     return true
}

  const submit = (e)=>{
    if(validateForm(e)) 
    {
      handleSubmit()
      if(submitted)
        navigate('/trip')
    }
  }

  return (
    <div className={`${isSubmitting ? 'pointer-events-none' : ''}`}>
       <div  className="w-full min-h-[calc(100vh-10vh)] flex items-center justify-center bg-base-200 px-4 py-8">
       <div className="w-full max-w-6xl bg-base-100 shadow-xl rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:flex flex-col justify-center p-10 bg-primary text-primary-content">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Globe className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-bold">Explore the World</h3>
                <p className="text-sm opacity-80">Discover new destinations and create unforgettable memories</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Compass className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-bold">Personalized Planning</h3>
                <p className="text-sm opacity-80">Tailored trip suggestions based on your preferences</p>
              </div>
            </div>
            <div className="mt-6 bg-primary-focus p-4 rounded-lg">
              <p className="text-sm italic">
                "Your journey of a thousand miles begins with a single click. Let's make your travel dreams a reality!"
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-10 lg:p-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-primary text-center">
            Plan Your Next Adventure
          </h1>
          <form onSubmit={(e)=>{submit(e)}} className="space-y-6 md:space-y-8">
            <div className="relative flex items-center space-x-4">
              <MapPin className="text-primary flex-shrink-0" size={24} />
              <div className="w-full">
                <input
                  type="text"
                  value={location}
                  onChange={(e)=>{
                                   setLocation(e.target.value)
                                   fetchLocationSuggestions(e.target.value)
                                  }}
                  placeholder="Where are you going?"
                  className="input input-bordered w-full"
                />
                {locationSuggestions.length > 0 && (
                  <ul className="absolute z-10 bg-base-100 border border-base-300 rounded-lg mt-1 max-h-48 overflow-y-auto shadow-lg w-full">
                    {locationSuggestions.map((suggestion, index) => (
                      <li 
                        key={index} 
                        onClick={() =>{
                                        setLocationSuggestions([])
                                        setLocation(suggestion.name)
                                      }}
                        className="p-2 hover:bg-base-200 cursor-pointer text-base-content border-b border-base-300 last:border-b-0"
                      >
                        {suggestion.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Calendar className="text-primary flex-shrink-0" size={24} />
              <input
                type="number"
                value={tripDays}
                onChange={(e) =>{setTripDays(e.target.value)}}
                placeholder="How many days?"
                className="input input-bordered w-full"
                min="1"
              />
            </div>
            <div className="flex items-center space-x-4">
              <User className="text-primary flex-shrink-0" size={24} />
              <select 
                value={travelGroup}
                onChange={(e) => setTravelGroup(e.target.value)}
                className="select select-bordered w-full"
              >
                <option value="">Who's going?</option>
                <option value="solo">Just me</option>
                <option value="couple">A couple</option>
                <option value="family">Family</option>
                <option value="friends">Friends</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full flex justify-between items-center space-x-2">
                <div className="form-control">
                  <label className="label cursor-pointer space-x-2">
                    <span className="label-text">Cheap</span>
                    <input 
                      type="radio" 
                      name="budget" 
                      value="cheap"
                      checked={budget === 'cheap'}
                      onChange={() => setBudget('cheap')}
                      className="radio radio-primary" 
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer space-x-2">
                    <span className="label-text">Moderate</span>
                    <input 
                      type="radio" 
                      name="budget" 
                      value="moderate"
                      checked={budget === 'moderate'}
                      onChange={() => setBudget('moderate')}
                      className="radio radio-primary" 
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer space-x-2">
                    <span className="label-text">Luxury</span>
                    <input 
                      type="radio" 
                      name="budget" 
                      value="luxury"
                      checked={budget === 'luxury'}
                      onChange={() => setBudget('luxury')}
                      className="radio radio-primary" 
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6 md:mt-8">
              <button disabled={isSubmitting} type="submit" className="btn btn-primary btn-wide">
                {
                  isSubmitting ? 
                  <><LoaderCircle className="mr-2 animate-spin"/>
                    Generating....</> 
                  :
                   <><Plane className="mr-2" />
                      Generate Trip</>
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CreateTrip