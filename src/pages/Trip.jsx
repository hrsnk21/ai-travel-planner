import React, { useEffect } from 'react';
import { useTripstore } from '../context/trip';

const Trip = () => {
  const { tripData, settripData } = useTripstore();

  // Save tripData to local storage whenever it changes and is valid
  useEffect(() => {
    if (tripData && Object.keys(tripData).length > 0) {
      localStorage.setItem('tripData', JSON.stringify(tripData));
    }
  }, [tripData]);

  // Load tripData from local storage on initial render if tripData is empty
  useEffect(() => {
    const storedTripData = localStorage.getItem('tripData');
    if ((!tripData || Object.keys(tripData).length === 0) && storedTripData) {
      settripData(JSON.parse(storedTripData));
    }
  }, []);

  return (
    <div className="container mx-auto p-4 h-[90vh] overflow-auto bg-base-100 text-base-content">
      <h1 className="text-3xl font-bold mb-6 text-primary">{tripData?.destination || 'Your Trip'}</h1>

      {/* Trip Overview */}
      <div className="card bg-base-200 shadow-xl mb-6">
        <div className="card-body">
          <h2 className="card-title text-primary">Trip Overview</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p><span className="font-bold text-secondary">Duration:</span> {tripData?.travelDuration}</p>
              <p><span className="font-bold text-secondary">Travel Group:</span> {tripData?.travelGroup}</p>
            </div>
            <div className="space-y-2">
              <p><span className="font-bold text-secondary">Budget Category:</span> {tripData?.budgetCategory}</p>
              <p><span className="font-bold text-secondary">Total Estimated Cost:</span> {tripData?.totalEstimatedCost}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Accommodation */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Accommodation</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {tripData?.hotels?.map((hotel, index) => (
            <div key={index} className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-secondary">{hotel.hotelName}</h3>
                <div className="space-y-2">
                  <p><span className="font-bold">Price Range:</span> {hotel.priceRange}</p>
                  <p><span className="font-bold">Rating:</span> {hotel.starRating} stars</p>
                  <p>{hotel.description}</p>
                  <p><span className="font-bold">Amenities:</span> {hotel.amenities}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Itinerary */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Itinerary</h2>
        {tripData?.dailyItinerary &&
          Object.entries(tripData.dailyItinerary).map(([day, activities]) => (
            <div key={day} className="card bg-base-200 shadow-md mb-4">
              <div className="card-body">
                <h3 className="card-title text-secondary">{day.charAt(0).toUpperCase() + day.slice(1)}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {['morning', 'afternoon', 'evening'].map((timeOfDay) => {
                    const activity = activities[timeOfDay];
                    return (
                      <div key={timeOfDay} className="card bg-base-100 shadow-sm">
                        <div className="card-body">
                          <h4 className="card-title text-sm">
                            {timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}
                          </h4>
                          <p className="font-bold">{activity?.placeName}</p>
                          <p>{activity?.description}</p>
                          <div className="space-y-1">
                            <p><span className="font-bold">Duration:</span> {activity?.estimatedVisitDuration}</p>
                            <p><span className="font-bold">Price:</span> {activity?.ticketPricing}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Cost Breakdown */}
      <div className="card bg-base-200 shadow-xl mb-6">
        <div className="card-body">
          <h2 className="card-title text-primary">Cost Breakdown</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tripData?.costBreakdown &&
              Object.entries(tripData.costBreakdown).map(([category, cost]) => (
                <p key={category} className="text-secondary">
                  <span className="font-bold">{category.charAt(0).toUpperCase() + category.slice(1)}:</span> {cost}
                </p>
              ))}
          </div>
        </div>
      </div>

      {/* Additional Recommendations */}
      <div className="card bg-base-200 shadow-xl mb-6">
        <div className="card-body">
          <h2 className="card-title text-primary">Additional Recommendations</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-secondary font-bold mb-2">Money Saving Tips</h3>
              <ul className="list-disc list-inside space-y-1">
                {tripData?.moneySavingTips?.map((tip, index) => (
                  <li key={index} className="text-base-content">{tip}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-secondary font-bold mb-2">Packing Suggestions</h3>
              <ul className="list-disc list-inside space-y-1">
                {tripData?.additionalRecommendations?.packingSuggestions?.map((item, index) => (
                  <li key={index} className="text-base-content">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-secondary font-bold mb-2">Safety Tips</h3>
              <ul className="list-disc list-inside space-y-1">
                {tripData?.additionalRecommendations?.safetyTips?.map((tip, index) => (
                  <li key={index} className="text-base-content">{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Transportation Options */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary">Transportation</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-secondary font-bold mb-2">Recommended Methods</h3>
              <ul className="list-disc list-inside space-y-1">
                {tripData?.transportationOptions?.recommendedMethods?.map((method, index) => (
                  <li key={index} className="text-base-content">{method}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-bold text-secondary">Estimated Transportation Costs:</span>{' '}
                {tripData?.transportationOptions?.estimatedTransportationCosts}
              </p>
              <p>
                <span className="font-bold text-secondary">Public Transit:</span>{' '}
                {tripData?.transportationOptions?.publicTransitOptions}
              </p>
              <p>
                <span className="font-bold text-secondary">Walking:</span>{' '}
                {tripData?.transportationOptions?.walkingDistances}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trip;
