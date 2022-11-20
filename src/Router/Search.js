import React, {Component} from 'react';
import {useLocation} from 'react-router'

const Search = () => {
  console.log(useLocation())

  const query = new URLSearchParams(useLocation().search);
  const term = query.get('q')

  const returned = doSearch(term)

  return (
    <div>
      <h1>Search page</h1>
      <p>Results for: {term}</p>
      <ul>
        {
          returned.map( t => (
            <li key={t}>{t}</li>
          ))
        }
      </ul>
    </div>
  )
}

const doSearch = term => {
  if(!term) {
    return Items;
  }

  return Items.filter(
    item => item.toLowerCase().indexOf(term.toLowerCase()) !== -1);
  
}

const Items = [
  'Lorem Ipsum',
  'Ipsum Dipsum',
  'Foo Bar',
  'A little black cat',
  'A lazy fox',
  'A jumping dog'
];


export default Search
