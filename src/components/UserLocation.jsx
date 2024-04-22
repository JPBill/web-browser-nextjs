'use client';

import { useEffect, useState } from 'react';

export default function UserLocation({ textStyles, showCity }) {
  const [location, setLocation] = useState({ country: '', city: '' });

  useEffect(() => {
    const getLocation = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
      ).then((res) => res.json());
      if (!response) return;
      const { country, city } = response;
      setLocation({ country, city });
    };
    getLocation();
  }, []);
  return (
    <div className={textStyles}>
      {showCity ? `${location.city}, ${location.country}` : location.country}
    </div>
  );
}
