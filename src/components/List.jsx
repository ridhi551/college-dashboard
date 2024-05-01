import React from 'react';
import { Link } from 'react-router-dom';

export default function TeacherList({ teacher }) {
  const openAssign = (id) => {
    console.log('Clicked on card with ID:', id);
  };

  return (
    <div className='list w-[700px] mt-14 ml-12'>
      <div className="flex flex-wrap">
        {teacher.map((teacher) => (
          <div className="w-1/2 p-4" key={teacher.id}>
            
            <Link to='/student/assign' onClick={() => openAssign(teacher.id)}>
              <div className="bg-teal-200 rounded-lg shadow-md flex flex-col items-center h-full">
                <h2 className="text-xl font-bold mb-2">{teacher.sem6}</h2>
                <div className="h-2 w-full bg-white rounded-lg"></div>
                <p className="text-lg mt-4 mb-4">{teacher.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
