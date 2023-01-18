import { useState, useEffect } from "react";
import Select from 'react-select'
import { fetchBreeds } from "api";

export const BreedSelect = ({onSelect}) => {
    const [breeds, setBreeds] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(()=>{
        async function getBreeds() {
            try{
                setIsLoading(true);
                const breeds = await fetchBreeds();
                setBreeds(breeds);
            }
            catch{
                setError('Error. Try reloading the page.');
            }finally {
                setIsLoading(false);
        }
        }

        getBreeds();
    }, [])
 
    const makeOptions = () => {
        return breeds.map(breed => ({
            value: breed.id,
            label: breed.name
        }));
    }

    const handleChange = option => {
        onSelect(option.value);
    };

        return (
            <div>
                <Select
                    options={makeOptions()}
                    onChange={handleChange}
                    isLoading={isLoading}
                />
                {error && <p style={{color: 'red'}}>{error}</p>}
            </div>
        );
    }
