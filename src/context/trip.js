import {create} from 'zustand'
import { AI_PROMPT } from '../constant/options'
import { chatSession } from '../services/aimodel'

export const useTripstore = create((set,get)=>({
    
    location:'',
    locationSuggestions:[],
    tripDays:'',
    travelGroup:'',
    tripData:{},
    budget:'',
    isSubmitting:false,
    submitted:false,
    GEOAPIFY_API_KEY: 'a9e2f32293a1401caa9d0ce198986bc8',

 
    setLocation: (location) => set({ location }),
    setTripDays: (tripDays) => set({ tripDays }),
    setTravelGroup: (travelGroup) => set({ travelGroup }),
    setBudget: (budget) => set({ budget }),
    setLocationSuggestions: (locationSuggestions) => set({ locationSuggestions }),
    settripData :(tripData)=>set({tripData}),

    resetTrip: () => set({
        location: '',
        tripDays: '',
        travelGroup: '',
        budget: '',
        locationSuggestions: [],
        tripData:{},
        isSubmitting:false,
        submitted:false,
    }),


    fetchLocationSuggestions: async (query)=>{
        const {GEOAPIFY_API_KEY,setLocationSuggestions} = get()
        if (query.length < 3) {
            setLocationSuggestions([])
            return 
        }
        try {
            
            const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(query)}&apiKey=${GEOAPIFY_API_KEY}`)
            const data = await response.json()
            setLocationSuggestions(data.features.map((feature)=>({name: feature.properties.formatted,
                                                                  coordinates: feature.geometry.coordinates})))
        }
        catch(error){
            console.error('Error fetching location suggestions:', error)
            setLocationSuggestions([])
        }
    },

    handleSubmit: async ()=>{
        const {isSubmitting , submitted, tripData ,settripData, resetTrip, tripDays , location , travelGroup , budget} = get()
        
       try{
           set({isSubmitting:true})
           const FINAL_PROMPT = AI_PROMPT.replace(/{location}/g,location)
                                         .replace(/{tripDays}/g,tripDays)
                                         .replace(/{travelGroup}/g,travelGroup)
                                         .replace(/{budget}/g,budget)
            console.log(FINAL_PROMPT)
            const result = await chatSession.sendMessage(FINAL_PROMPT)
            console.log(result?.response?.text())
            set({
                submitted:true,
                tripData:  JSON.parse(result?.response?.text())
            })
       }
       catch(error){
            console.error('Error while submitting', error)
            settripData({})
       }
    },

}))