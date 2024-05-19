import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import WisataCard from './WisataCard';
import DataWisata from './DataWisata';
import { Helmet } from 'react-helmet';

function Wisata() {

  const [searchInput, setSearchInput] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleFilterButtonClick = (category) => {
    setCategoryFilter(category);
  };

  const filteredProducts = DataWisata.filter((product) => {
    if (categoryFilter === 'all' || product.Kategori === categoryFilter) {
      return product.nama.toUpperCase().includes(searchInput.toUpperCase());
    }
    return false;
  });

  const createCard = (data) => (
    <WisataCard
      id={data.id}
      img={data.imgURL}
      nama={data.nama}
      Kategori={data.Kategori}
    />
  );

   if (window.innerWidth <= 768) {
    document.querySelectorAll('.wisata-grid').forEach((element, index) => {
      element.setAttribute('data-aos-delay', `${index * 100}`);
    });
  }  

  return (
    <div className='bodyWisata'>
      <Helmet>
        <link rel='stylesheet' href='wisata.css' />
      </Helmet>
      <Navbar />
      <section className='wisata-section' id='wisata'>
        <div className='wisata-wrapper'>
          <div id='search-container-wisata' >
            <input
              type='search'
              id='search-input'
              placeholder='Cari destinasi wisata . . .'
              value={searchInput}
              onChange={handleSearchInputChange}
              data-aos="fade-right" data-aos-delay="200"
            />
            <button id='search-wisata' data-aos="fade-left" data-aos-delay="200">Search</button>
          </div>
          <div id='buttons-wisata'>
            <div data-aos="fade-up" data-aos-delay="200">
            <button
              className='button-value-wisata'
              onClick={() => handleFilterButtonClick('all')}
             
            >
              All
            </button>
            </div>

            <div data-aos="fade-up" data-aos-delay="250">
            <button
              className='button-value-wisata'
              onClick={() => handleFilterButtonClick('Pantai')}
             
            >
              Pantai
            </button>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
            <button
              className='button-value-wisata'
              onClick={() => handleFilterButtonClick('Bukit')}
             
            >
              Bukit
            </button>
            </div>

            <div data-aos="fade-up" data-aos-delay="350">
            <button
              className='button-value-wisata'
              onClick={() => handleFilterButtonClick('Monumen')}
             
            >
              Monumen
            </button>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
            <button
              className='button-value-wisata'
              onClick={() => handleFilterButtonClick('Pulau')}
             
            >
              Pulau
            </button>
            </div>
            <div data-aos="fade-up" data-aos-delay="550">
            <button
              className='button-value-wisata'
              onClick={() => handleFilterButtonClick('Air terjun')}
             
            >
              Air Terjun
            </button>
            </div>
          </div>
          <div id='products-wisata'>
            <div className='wisata-container wisata-grid'>
              {filteredProducts.map(createCard)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Wisata;
