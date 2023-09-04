import { useQuery } from "@tanstack/react-query"

const fethPokemons = async () => {
    return await fetch("http://localhost:3000/pokemon?limit=10")
        .then(async res => {
            if(!res.ok) throw new Error('Error en la petición')
            return await res.json()
        })
        .then(res => res.results)
}
 
const Home = () => {
    
    const { data } = useQuery({
        queryKey:['Pokemon'],
        queryFn: fethPokemons
    })

    return (
        <div>Home</div>
    )
}

export default Home