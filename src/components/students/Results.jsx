import React from 'react'
import useFetch from '../useFetch'
import Show from './Show'

export default function Results() {
const {data, isPending, error} = useFetch('http://localhost:5000/result')

  return (
    <div className='m-12'>
      <h2>Results fetched from records</h2>
        {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
        {data && <Show result={data} />}
      
    </div>
  )
}
