import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Genres } from 'types/genres';
import Select from "react-select";
import api from 'utils/request';


export type MangaFilterData = {
    name: string
    genre: Genres | null;
};


type Props = {
    onSubmitFilter: (data: MangaFilterData) => void
}


function Filter({ onSubmitFilter }: Props) {
    const [generos, setGeneros] = useState<Genres[]>([]);

    const { register, handleSubmit, setValue, getValues, control } = useForm<MangaFilterData>()

    const onSubmit = (formData: MangaFilterData) => {
        onSubmitFilter(formData);
    };

    const handleFormClear = () => {
        setValue("name", "");
        setValue("genre", null);
    };

    const handleChangeCategory = (value: Genres) => {
        setValue("genre", value);

        const obj: MangaFilterData = {
            name: getValues("name"),
            genre: getValues("genre"),
        };
        onSubmitFilter(obj);
    };

    useEffect(() => {
        api.get(`genres/manga`).then(({ data }) => {
            setGeneros(data.data);
        });
    }, []);


    return (
        <div className="base-card product-filter-container">
            <form onSubmit={handleSubmit(onSubmit)} className="product-filter">
                <div className="product-filter-name-container">
                    <input
                        {...register("name")}
                        type="text"
                        className="form-control"
                        placeholder="Nome do Manga"
                        name="name"
                    />
                    <button className="product-filter-search-icon">
                        adsdsd
                    </button>
                </div>
                <div className="product-filter-botton-container">
                    <div className="product-filter-category-container">
                        <Controller
                            name="genre"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={generos}
                                    isClearable
                                    placeholder="Genero"
                                    classNamePrefix="product-filter-select"
                                    onChange={(value) => handleChangeCategory(value as Genres)}
                                    getOptionLabel={(genre: Genres) => genre.name}
                                    getOptionValue={(genre: Genres) => String(genre.mal_id)}
                                />
                            )}
                        />
                    </div>
                    <button
                        onClick={handleFormClear}
                        className="btn btn-outline-secondary btn-product-filter-clear"
                    >
                        Limpar<span className="btn-product-filter-word">Filtro</span>{" "}
                    </button>
                </div>
            </form>
        </div>

    )
}

export default Filter;