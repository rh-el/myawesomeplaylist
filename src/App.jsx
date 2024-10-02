import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Input from './components/Input'
import Button from './components/Button'
import React from 'react'

const supabaseUrl = 'https://uthbmnlhrpippnxvnkbv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0aGJtbmxocnBpcHBueHZua2J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4NjE1MTUsImV4cCI6MjA0MzQzNzUxNX0.qXQkfLnmGrEp4T2xaQ2KzEDajCUBl4HTrm5xt9r_4uI'
const supabase = createClient(supabaseUrl, supabaseAnonKey)


function App() {

  const [input, setInput] = useState('')
  const [placeholder, setPlaceholder] = useState('drop a youtube or spotify banger')
  const [buttonText, setButtonText] = useState('submit')


  const handleInputChange = useCallback(
    (e) => {
      setInput(e.target.value)     
    },[input]
  )

  const handleSubmit = useCallback(
    () => {
        insertTrack(input)
        setInput('')  
        setPlaceholder('thanks! another one??')  
        setButtonText('another one')  
    }, [input]
  )

  async function insertTrack(url) {
    const { data } = await supabase
  .from('tracks')
  .insert({ track_link: url })
  .select()
  }


  return (
    <>
    <div className='w-full h-svh flex flex-col'>
      <div className='bg-customred h-1/2 flex justify-center'>
        <div className=' text-custompink w-96 px-4 py-4 flex flex-col justify-center text-7xl'>
            <h1 className=''>my</h1>
            <h1 className=''>awesome</h1>
            <h1 className=''>playlist</h1>
            <h1 className=''>maker</h1>
        </div>
      </div>
      <div className='w-full bg-custompink flex flex-col items-center h-1/2'>
        <div className='second w-96 h-1/2 flex flex-col items-center justify-center py-48  bg-custompink text-customred'>
          <div className='flex flex-col justify-center items-center gap-10 w-full px-4'>
            <p className='second text-center'>designed to make playlist collaboratively</p>
            <div className='text-center'>
            <h2 className='second text-xl'>ada tech school - spring break @cancun</h2>
            <h2 className='second'>04/10/2024</h2>
            </div>
            <Input placeholder={placeholder} input={input} handleInputChange={handleInputChange} />
            <Button buttonText={buttonText} handleSubmit={handleSubmit} input={input} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App