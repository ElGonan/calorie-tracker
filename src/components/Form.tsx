import { categories } from "../data/categories"

export const Form = () => {
  return (
    <>
        <form className='space-y-5 bg-white shadow p-10 rounded-lg'>
            <div className='grid grid-cols-1 gap-3'>
                <label htmlFor=''>Categoría:</label>
                <select className='border border-slate-300 p-2 rounded-kg w-full bg-white' id="category">
                    {categories.map(category => (
                        <option>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
    

        </form>
    </>
  )
}
