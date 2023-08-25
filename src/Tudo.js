import {useState} from 'react'
import {toast} from 'react-hot-toast'

export default function Tudo() {
    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState([])

    const addItem = () => {
        if(!inputData) {
            toast.error("Please add value")
        }
        else{
        setItems(...items, inputData)
        setInputData('')
        }     
    }
  return (
    <div className='flex items-center justify-center w-full h-screen bg-white'>
      <div className='flex flex-col items-center justify-center p-3 bg-white border border-black shadow-slate-300 w-[400px]'>
        <h3 className='text-xl font-normal'>Grocery Bud</h3>

        <div>
            <input type="text"
            className='p-1 border outline-none border-slate-400' 
            placeholder='Add items'
            value={inputData}
            onChange={(e) => setInputData(e.target.value) } 
            />
            <button 
            className='p-1 text-white bg-black'
            onClick={addItem}
            >
                Add
            </button>
        </div>
        <div>
          {
            items.map((elem, indx) => {
              return (
                <div key={indx}>
                  <h1>helloo</h1>
                 <span className='text-2xl text-black'>{elem}</span>
                </div>
              )
            }
            )
          }
        </div>
      </div>
    </div>
  )
}
