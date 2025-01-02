 
  import { GoogleGenerativeAI } from "@google/generative-ai"
  
  const apiKey = "AIzaSyC6KlnbI9jLNOSck9qgNfIOb0KZMyfNf8o"
  const genAI = new GoogleGenerativeAI(apiKey);
   
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "You are a professional travel planner specializing in creating detailed, personalized travel itineraries. Generate a comprehensive 3-day travel plan for a couple visiting Las Vegas with a budget-friendly approach.\n\nTravel Parameters:\n- Destination: Las Vegas, Nevada, USA\n- Duration: 3 Days\n- Travel Group: Couple\n- Budget Category: Cheap/Budget-Friendly\n\nRequired Itinerary Details:\n\n1. Hotel Recommendations:\nFor each hotel, provide:\n- Hotel Name\n- Full Address\n- Price Range (per night)\n- Hotel Image URL\n- Geographical Coordinates (Latitude, Longitude)\n- Star Rating\n- Brief Description\n- Amenities\n- Distance from City Center\n- Budget Category Alignment\n\nMinimum 3 Hotel Options, Maximum 5 Hotel Options\n\n2. Daily Itinerary Structure:\nEach day should include:\n- Morning Activities\n- Afternoon Activities\n- Evening Activities\n- Best Time to Visit for Each Location\n- Estimated Time Spent at Each Location\n\nFor Each Attraction/Location, Provide:\n- Place Name\n- Detailed Description\n- Place Image URL\n- Geographical Coordinates\n- Ticket/Entry Pricing\n- Estimated Visit Duration\n- Transportation Details\n- Recommended Time Slot\n\n3. Budget Considerations:\n- Total Estimated Trip Cost\n- Cost Breakdown (Accommodation, Food, Activities, Transportation)\n- Money-Saving Tips\n- Free or Low-Cost Attractions\n\n4. Transportation:\n- Recommended Transportation Methods\n- Estimated Transportation Costs\n- Walking Distance Between Attractions\n- Public Transit Options\n- Rideshare Availability\n\n5. Additional Recommendations:\n- Dining Options (Budget-Friendly Restaurants)\n- Safety Tips\n- Packing Suggestions\n- Local Customs and Etiquette\n\nOutput Format Requirements:\n- Structured JSON format\n- Comprehensive and detailed information\n- Clear, concise language\n- Practical, actionable travel advice\n\nConstraints:\n- Focus on budget-friendly options\n- Prioritize couple-friendly activities\n- Include a mix of attractions (entertainment, dining, sightseeing)\n- Ensure variety in daily activities\n\nExample Nested JSON Structure Expectation:\n```json\n{\n  \"destination\": \"Las Vegas\",\n  \"travelDuration\": \"3 Days\",\n  \"travelGroup\": \"Couple\",\n  \"budgetCategory\": \"Cheap\",\n  \"hotels\": [...],\n  \"dailyItinerary\": {\n    \"day1\": {\n      \"morning\": [...],\n      \"afternoon\": [...],\n      \"evening\": [...]\n    }\n  },\n  \"totalEstimatedCost\": \"\",\n  \"transportationOptions\": [...]\n}"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"destination\": \"Las Vegas, Nevada, USA\",\n  \"travelDuration\": \"3 Days\",\n  \"travelGroup\": \"Couple\",\n  \"budgetCategory\": \"Cheap\",\n  \"hotels\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"address\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"priceRange\": \"$50-$100\",\n      \"hotelImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/CircusCircusLasVegas.jpg/1280px-CircusCircusLasVegas.jpg\",\n      \"coordinates\": {\n        \"latitude\": 36.1208,\n        \"longitude\": -115.1729\n      },\n      \"starRating\": 2.5,\n      \"description\": \"A classic Vegas experience with affordable rooms and a free circus act.\",\n      \"amenities\": \"Casino, pool, free circus acts, restaurants\",\n      \"distanceFromCityCenter\": \"On the Strip\",\n      \"budgetCategoryAlignment\": true\n    },\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"address\": \"300 Fremont Street, Las Vegas, NV 89101\",\n      \"priceRange\": \"$60-$120\",\n      \"hotelImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/TheDLasVegas.jpg/1280px-TheDLasVegas.jpg\",\n      \"coordinates\": {\n        \"latitude\": 36.1673,\n        \"longitude\": -115.1400\n      },\n      \"starRating\": 3,\n      \"description\": \"Located in the Fremont Street Experience, offering a lively atmosphere.\",\n      \"amenities\": \"Casino, restaurants, bars, pool\",\n      \"distanceFromCityCenter\": \"Downtown, close to Fremont Street Experience\",\n      \"budgetCategoryAlignment\": true\n    },\n    {\n      \"hotelName\": \"Motel 6 Las Vegas West\",\n      \"address\": \"7200 S Decatur Blvd, Las Vegas, NV 89118\",\n      \"priceRange\": \"$40-$80\",\n      \"hotelImageURL\": \"https://www.motel6.com/content/dam/motel6/images/property-images/Las-Vegas-West-NV/exterior-daytime.jpg\",\n      \"coordinates\": {\n        \"latitude\": 36.0655,\n        \"longitude\": -115.2328\n      },\n      \"starRating\": 2,\n      \"description\": \"Basic, affordable option outside the Strip.\",\n      \"amenities\": \"Pool, free Wi-Fi\",\n      \"distanceFromCityCenter\": \"Off the Strip, requires transportation\",\n      \"budgetCategoryAlignment\": true\n    }\n  ],\n  \"dailyItinerary\": {\n    \"day1\": {\n      \"morning\": {\n        \"placeName\": \"Fremont Street Experience\",\n        \"description\": \"Explore the vibrant pedestrian mall with its dazzling Viva Vision light show.\",\n        \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/FremontStreetExperienceLasVegas.jpg/1280px-FremontStreetExperienceLasVegas.jpg\",\n        \"coordinates\": {\n          \"latitude\": 36.1665,\n          \"longitude\": -115.1400\n        },\n        \"ticketPricing\": \"Free\",\n        \"estimatedVisitDuration\": \"2 hours\",\n        \"transportationDetails\": \"Walkable if staying downtown; otherwise, use rideshare or bus.\",\n        \"recommendedTimeSlot\": \"9:00 AM - 11:00 AM\"\n      },\n      \"afternoon\": {\n        \"placeName\": \"Neon Museum\",\n        \"description\": \"See iconic Las Vegas signs from the past.\",\n        \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Neon_Museum_Boneyard.jpg/1280px-Neon_Museum_Boneyard.jpg\",\n        \"coordinates\": {\n          \"latitude\": 36.1764,\n          \"longitude\": -115.1437\n        },\n        \"ticketPricing\": \"$25\",\n        \"estimatedVisitDuration\": \"1.5 hours\",\n        \"transportationDetails\": \"Taxi, Rideshare, or Bus\",\n        \"recommendedTimeSlot\": \"1:00 PM - 2:30 PM\"\n      },\n      \"evening\": {\n        \"placeName\": \"Dinner at In-N-Out Burger\",\n        \"description\": \"Enjoy a classic West Coast burger at an affordable price.\",\n        \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/In-N-Out_Burger_logo.svg/1200px-In-N-Out_Burger_logo.svg.png\",\n        \"coordinates\": {\n          \"latitude\": 36.1454,\n          \"longitude\": -115.1672\n        },\n        \"ticketPricing\": \"$15-$20 per person\",\n        \"estimatedVisitDuration\": \"1 hour\",\n        \"transportationDetails\": \"Rideshare, bus, or walk depending on location\",\n        \"recommendedTimeSlot\": \"7:00 PM - 8:00 PM\"\n      }\n    },\n    \"day2\": {\n      \"morning\": {\n        \"placeName\": \"Las Vegas Strip Walk\",\n        \"description\": \"Walk the Strip, admire the architecture and take photos.\",\n        \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Las_Vegas_Strip_at_night.jpg/1280px-Las_Vegas_Strip_at_night.jpg\",\n        \"coordinates\": {\n          \"latitude\": 36.1100,\n          \"longitude\": -115.1700\n        },\n        \"ticketPricing\": \"Free\",\n        \"estimatedVisitDuration\": \"3 hours\",\n        \"transportationDetails\": \"Walk\",\n        \"recommendedTimeSlot\": \"9:00 AM - 12:00 PM\"\n      },\n      \"afternoon\": {\n        \"placeName\": \"Bellagio Fountains\",\n        \"description\": \"Free show of dancing fountains.\",\n        \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bellagio_Fountains_2019.jpg/1280px-Bellagio_Fountains_2019.jpg\",\n        \"coordinates\": {\n          \"latitude\": 36.1112,\n          \"longitude\": -115.1728\n        },\n        \"ticketPricing\": \"Free\",\n        \"estimatedVisitDuration\": \"1 hour\",\n        \"transportationDetails\": \"Walk\",\n        \"recommendedTimeSlot\": \"1:00 PM - 2:00 PM\"\n      },\n      \"evening\": {\n        \"placeName\": \"Free show on the Strip (e.g., Mirage Volcano)\",\n        \"description\": \"Enjoy a free show at one of the many hotels.\",\n        \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/The_Mirage_Volcano.jpg/1280px-The_Mirage_Volcano.jpg\",\n        \"coordinates\": {\n          \"latitude\": 36.1188,\n          \"longitude\": -115.1745\n        },\n        \"ticketPricing\": \"Free\",\n        \"estimatedVisitDuration\": \"30 minutes\",\n        \"transportationDetails\": \"Walk\",\n        \"recommendedTimeSlot\": \"8:00 PM - 8:30 PM\"\n      }\n    },\n    \"day3\": {\n      \"morning\": {\n        \"placeName\": \"Seven Magic Mountains\",\n        \"description\": \"Colorful art installation south of Las Vegas (requires transportation).\",\n        \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Seven_Magic_Mountains_2016.jpg/1280px-Seven_Magic_Mountains_2016.jpg\",\n        \"coordinates\": {\n          \"latitude\": 35.9657,\n          \"longitude\": -115.0142\n        },\n        \"ticketPricing\": \"Free\",\n        \"estimatedVisitDuration\": \"1 hour\",\n        \"transportationDetails\": \"Rental car recommended\",\n        \"recommendedTimeSlot\": \"9:00 AM - 10:00 AM\"\n      },\n      \"afternoon\": {\n        \"placeName\": \"Red Rock Canyon National Conservation Area\",\n        \"description\": \"Scenic drive and hiking trails (requires transportation).\",\n        \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Red_Rock_Canyon_National_Conservation_Area.jpg/1280px-Red_Rock_Canyon_National_Conservation_Area.jpg\",\n        \"coordinates\": {\n          \"latitude\": 36.2000,\n          \"longitude\": -115.6667\n        },\n        \"ticketPricing\": \"$15 per vehicle\",\n        \"estimatedVisitDuration\": \"3 hours\",\n        \"transportationDetails\": \"Rental car recommended\",\n        \"recommendedTimeSlot\": \"11:00 AM - 2:00 PM\"\n      },\n      \"evening\": {\n        \"placeName\": \"Farewell Dinner at a Cheap Eats Place (Eastside Cannery Buffet)\",\n        \"description\": \"Enjoy a final affordable meal before heading to the airport.\",\n        \"placeImageURL\": \"https://cdn.vox-cdn.com/thumbor/0d1oG414bW-n6o85i-7aK8v8H0=/0x0:1440x960/1200x800/filters:focal(607x367:833x593)/cdn.vox-cdn.com/uploads/chorus_image/image/66577847/Eastside_Cannery_Casino_Hotel.0.jpg\",\n        \"coordinates\": {\n          \"latitude\": 36.1043,\n          \"longitude\": -115.0964\n        },\n        \"ticketPricing\": \"$20-$30 per person\",\n        \"estimatedVisitDuration\": \"1.5 hours\",\n        \"transportationDetails\": \"Taxi or Rideshare\",\n        \"recommendedTimeSlot\": \"6:00 PM - 7:30 PM\"\n      }\n    }\n  },\n  \"totalEstimatedCost\": \"$500 - $800 (excluding flights)\",\n  \"costBreakdown\": {\n    \"accommodation\": \"$150-$300\",\n    \"food\": \"$150-$250\",\n    \"activities\": \"$50-$100\",\n    \"transportation\": \"$50-$150\"\n  },\n  \"moneySavingTips\": [\n    \"Take advantage of free attractions.\",\n    \"Eat at affordable restaurants and fast-food places.\",\n    \"Walk as much as possible to avoid transportation costs.\",\n    \"Look for discounts and coupons online.\",\n    \"Consider happy hour deals.\"\n  ],\n  \"freeOrLowCostAttractions\": [\n    \"Fremont Street Experience\",\n    \"Bellagio Fountains\",\n    \"Mirage Volcano\",\n    \"Seven Magic Mountains\",\n    \"Walking the Strip\"\n  ],\n  \"transportationOptions\": {\n    \"recommendedMethods\": [\"Walking\", \"Public Bus (RTC)\", \"Ride-sharing (Uber/Lyft)\"],\n    \"estimatedTransportationCosts\": \"$50-$150\",\n    \"walkingDistances\": \"Variable, check maps for distances between attractions.\",\n    \"publicTransitOptions\": \"RTC buses are available throughout the city.\",\n    \"rideshareAvailability\": \"Uber and Lyft are readily available.\"\n  },\n  \"additionalRecommendations\": {\n    \"diningOptions\": [\n      \"In-N-Out Burger\",\n      \"Secret Pizza (The Cosmopolitan)\",\n      \"Tacos El Gordo\",\n      \"Earl of Sandwich\"\n\n    ],\n    \"safetyTips\": [\n      \"Stay aware of your surroundings.\",\n      \"Don't carry large amounts of cash.\",\n      \"Drink responsibly.\",\n      \"Use reputable transportation services.\"\n    ],\n    \"packingSuggestions\": [\n      \"Comfortable shoes for walking\",\n      \"Sunscreen and hat\",\n      \"Layers of clothing\",\n      \"Reusable water bottle\"\n    ],\n    \"localCustomsAndEtiquette\": [\n      \"Tipping is customary in Las Vegas.\",\n      \"Be respectful of others.\",\n      \"Stay hydrated in the desert climate.\"\n    ]\n  }\n}\n```\n"},
          ],
        },
      ],
});
  


  