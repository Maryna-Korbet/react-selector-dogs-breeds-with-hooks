import { useState, useEffect, useMemo } from "react";
import Select from 'react-select'
import { fetchBreeds } from "api";

const ERROR_MESSAGE = 'Error. Try reloading the page.';

export const BreedSelect = ({onSelect}) => {
    const [breeds, setBreeds] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(()=>{
        async function getBreeds() {
            try{
                setIsLoading(true);
                setBreeds(await fetchBreeds());
            }
            catch{
                setError(ERROR_MESSAGE);
            }finally {
                setIsLoading(false);
        }
        }
        getBreeds();
    }, []);
    
    const options = useMemo(() =>{
        return breeds.map(breed => ({
            value: breed.id,
            label: breed.name,
        }));
    }, [breeds]);
    
    const handleChange = option => {
        onSelect(option.value);
    };

        return (
            <div>
                <Select
                    options={options}
                    onChange={handleChange}
                    isLoading={isLoading}
                />
                {error && <p style={{color: 'red'}}>{error}</p>}
            </div>
        );
    }
