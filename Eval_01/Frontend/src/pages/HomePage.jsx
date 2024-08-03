import React, { useContext, useState, useEffect, useRef } from 'react';
import { getCountryByCurrencyCode } from '../api/countryApi';
import { AuthContext } from '../contexts/AuthContext';
import { SearchContext } from '../contexts/SearchContext';
import { addFavorite } from '../api/favoriteApi';
import CountryCard from '../components/CountryCard';

const HomePage = () => {
  const { auth } = useContext(AuthContext);
  const { searchHistory, setSearchHistory } = useContext(SearchContext);
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search.trim()) {
      try {
        const { data } = await getCountryByCurrencyCode(search);
        setCountries(data);
        setSearchHistory([search, ...searchHistory.filter(item => item !== search)].slice(0, 5));
      } catch (err) {
        console.error('Error fetching country data:', err.message);
      }
    }
  };

  const handleFavorite = async (country) => {
    if (auth.token) {
      try {
        await addFavorite(country, auth.token);
      } catch (err) {
        console.error('Error adding favorite:', err.message);
      }
    } else {
      alert('Please log in to add favorites.');
    }
  };

  return (
    <div className="home-page">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter currency code"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={searchRef}
        />
        <button type="submit">Search</button>
      </form>
      <div className="search-history">
        {searchHistory.map((item, index) => (
          <button key={index} onClick={() => setSearch(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="country-list">
        {countries.map(country => (
          <CountryCard
            key={country.cca3}
            country={country}
            onFavorite={() => handleFavorite(country)}
            isFavorite={false} 
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
