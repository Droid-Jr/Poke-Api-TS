import React, { ChangeEvent } from 'react'
import useUserName from '@/store/home.Zuntas'
import TypesApi from '../../../services/TypesApi'

interface BuscadorProps{
  changename:  (e: React.FormEvent<HTMLFormElement>) => void;
  changeOp: (e: ChangeEvent<HTMLSelectElement>) => void;
  option:string
 }

function WelcomePokemon({ changename,option,changeOp} :BuscadorProps) {

    const [types] = TypesApi("https://pokeapi.co/api/v2/type")
    
    const {nameUser} = useUserName()


  return (
    <section className='w-[95%]  py-10 m-auto flex flex-col gap-3'>
        <h1 className='text-[red] font-bold [font-size:_clamp(1.4em,3vw,2em)]'>Bienvenido {nameUser}, <span className='text-[#646464] '>aqui podras encontrar tu pokemón favorito</span> </h1>
       <article className='flex flex-wrap items-center justify-around gap-5'>
       <form onSubmit={changename} className='flex  '>
        <input id='inputs' placeholder='Pikachu' type="text" className='shadow-[3px_3px_4px_black] outline-none text-center font-semibold' autoComplete='true' />
        <button className='shadow-[3px_3px_4px_black] bg-[red] text-white font-extrabold py-2 px-1 sm:px-5 '>Buscar</button>
      </form>
      <select onChange={changeOp} value={option} className=' py-2  px-5 shadow-[3px_3px_4px_black]  ' >
        <option value="" className='py-2  px-5  '>Todos los pokemones</option>
        {
            types?.map(type =>
                <option key={type.name}>{type.name}</option>
                )
        }
      </select>
       </article>
    </section>
  )
}

export default WelcomePokemon