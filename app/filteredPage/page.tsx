'use client'
import getAllToDos from '@/lib/getAllToDos';
import React, { useState, useEffect } from 'react';
import style from './page.module.css'

export default function FilteredPage() {
  const [filterText, setFilterText] = useState('');
  const [filteredItems, setFilteredItems] = useState<Todo[]>([]);
  const [allItems, setAllItems] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => {
        setAllItems(data);
        setFilteredItems(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleFilterChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setFilterText(newText);

    const filteredList = allItems.filter(item =>
      item.title.toLowerCase().includes(newText.toLowerCase())
    );
    setFilteredItems(filteredList);
  };

  return (
    <div className={style.container}>
      {/* <h1>Filtered List</h1> */}
      <input
        type="text"
        placeholder="Filter..."
        value={filterText}
        onChange={handleFilterChange}
        className={style.inputElement}
      />
      <br/> 
      <ul className={style.list}>
        {filteredItems.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
