import { useState } from "react"
import { categories } from "../data/categories"
import type { Activity } from "../types"

export const Form = () => {
    
    // En lugar de tener un state para cada elemento, ya que están conectados, usaremos un objeto
    // con todos los elementos que requerimos para hacer fucionar este forms.
    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    })

    // Aunque esto se podría poner inline en el onChange, sería mucho códgio reescrito, mejor
    // una función nueva. Es más limpio.
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id)

        console.log(isNumberField)
        


        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    return (
    <>
        <form className='space-y-5 bg-white shadow p-10 rounded-lg'>
            <div className='grid grid-cols-1 gap-3'>
                <label htmlFor='category' className="font-bold">Categoría:</label>
                <select className='border border-slate-300 p-2 rounded-kg w-full bg-white' id="category"
                value={activity.category}
                onChange={handleChange }>
                    {categories.map(category => (
                        <option
                        key={category.id}
                        value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className='grid grid-cols-1 gap-3'>
                <label htmlFor='name' className="font-bold">Actividad:</label>
                <input
                id="name"
                type="text"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Ej. Comida, jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
                value={activity.name}
                onChange={handleChange}/>


            </div>

            <div className='grid grid-cols-1 gap-3'>
                <label htmlFor='calories' className="font-bold">Calorías:</label>
                <input
                id="calories"
                type="number"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Ej: 300,500"
                value={activity.calories}
                onChange={handleChange}/>


            </div>

            <input
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer transition-colors"
            value="Guardar comida o ejericicio">
            </input>
    

        </form>
    </>
  )
}
