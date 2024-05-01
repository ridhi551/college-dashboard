import React from 'react';
import { Link } from 'react-router-dom';

export default function Show({ result }) {
  const openAssign = (id) => {
    console.log('Clicked on card with ID:', id);
  };

  return (
    
      <div className="flex flex-column">
        {result.map((result) => (
          <div className="w-1/2 p-4" key={result.id}>
            <ul className='m-12'>
                <li>Sem 1: {result.sem1} CGPA</li>
                <li>Sem 2: {result.sem2} CGPA</li>
                <li>Sem 3: {result.sem3} CGPA</li>
                <li>Sem 4: {result.sem4} CGPA</li>
                <li>Sem 5: {result.sem5} CGPA</li>
                <li>Sem 6: {result.sem6} CGPA</li>
            </ul>
            </div>
        ))}
      </div>
  );
}
