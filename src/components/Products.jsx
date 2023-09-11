import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {
  headphones,
  shoes,
  garments,
  furniture,
  featured,
  allMainProducts,
} from '../constants/constants';
import ProductBox from './ProductBox';
import { MenuItem, TextField } from '@mui/material';

const categoriesArr = ['headphones', 'shoes', 'furniture', 'garments', 'all'];

const Products = ({ title }) => {
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [sortBy, setSortBy] = useState('');

  const navigate = useNavigate();

  const params = useParams();

  const [searchParams] = useSearchParams();
  const isSortingAscending = searchParams.get('sort');

  let originalProductsArr = [];
  if (params.category === 'headphones') originalProductsArr = headphones;
  if (params.category === 'shoes') originalProductsArr = shoes;
  if (params.category === 'furniture') originalProductsArr = furniture;
  if (params.category === 'garments') originalProductsArr = garments;
  if (params.category === 'all') originalProductsArr = allMainProducts;
  if (title === 'Featured') originalProductsArr = featured;

  const category = params.category || 'featured';

  useEffect(() => {
    let products = [];
    if (originalProductsArr.length < 1) return;

    if (isSortingAscending === 'asc') {
      products = originalProductsArr[1]?.products.sort(
        (a, b) => a.price - b.price
      );
      setSortBy('ascending');
    } else if (isSortingAscending === 'desc') {
      products = originalProductsArr[1]?.products.sort(
        (a, b) => b.price - a.price
      );
      setSortBy('descending');
    } else {
      if (params.category === 'all')
        products = originalProductsArr[1]?.products.filter(
          pr => !pr.id.includes('fe')
        );
      else products = originalProductsArr[1]?.products;
      setSortBy('');
    }

    setProductsToDisplay(products);
  }, [isSortingAscending, originalProductsArr]);

  if (productsToDisplay.length < 1) return;

  const updateProductsChoice = item => navigate(`/categories/${item}`);

  const handleSort = e =>
    navigate(`?sort=${e.target.value === 'ascending' ? 'asc' : 'desc'}`);

  return (
    <div className="w-full px-3 py-10 bg-white take-screen">
      <div className="max-w-7xl mx-auto relative space-y-3">
        {/* Filter & Sort Options */}
        {params.category && (
          <div className="flex justify-between items-start space-x-2 mb-6">
            {/* // TODO: Continue working on these chips. Update results upon clicking on these chips */}
            <div className="hidden md:flex flex-row flex-wrap gap-2 items-center justify-center flex-1 sm:justify-start sm:gap-5">
              {categoriesArr.map((cat, i) => (
                <span
                  key={cat + i}
                  onClick={() => updateProductsChoice(cat)}
                  className={`chip ${
                    params.category === cat &&
                    'bg-orange-600 text-white opacity-100'
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Mobile Menu for Selecting Categories */}
            <div className="flex flex-col items-center gap-1 md:hidden capitalize">
              <p className="font-medium text-gray-600">Product:</p>
              <TextField
                id="select-category"
                select
                value={category}
                onChange={e => updateProductsChoice(e.target.value)}
                size="small"
                color="info"
              >
                {categoriesArr.map((cat, i) => (
                  <MenuItem
                    key={cat + i}
                    value={cat}
                    sx={{ textTransform: 'capitalize' }}
                  >
                    {cat}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            {/* Sort */}
            <div className="flex flex-col justify-end items-center gap-1 md:flex-row">
              <p className="font-medium text-gray-600">Sort:</p>
              <TextField
                id="sort-price"
                select
                value={sortBy}
                onChange={handleSort}
                size="small"
                color="info"
                label="By Price"
                sx={{ minWidth: '7rem' }}
              >
                <MenuItem value="ascending">$ Low to High</MenuItem>
                <MenuItem value="descending">$ High to Low</MenuItem>
              </TextField>
            </div>
          </div>
        )}

        {/* Products */}
        <h3 className="capitalize">
          {title
            ? title + ' Products'
            : params.category === 'all'
            ? 'All Products'
            : params.category}
        </h3>
        <div className="flex flex-wrap gap-6 justify-center items-center px-2 py-4 sm:px-4">
          {/* Products */}
          {productsToDisplay?.length > 0 &&
            productsToDisplay?.map((item, i) => (
              <ProductBox
                key={item?.image + i}
                item={item}
                category={category}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
