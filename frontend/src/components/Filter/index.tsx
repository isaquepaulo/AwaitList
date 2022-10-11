import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Genres } from 'types/genres';
import Select from "react-select";
import api from 'utils/request';
import "./styles.css"

export type MangaFilter = {
  genre: Genres | null;
};

type Props = {
  onSubmitFilter: (data: MangaFilter) => void
}

function Filter({ onSubmitFilter }: Props) {
  const [generos, setGeneros] = useState<Genres[]>([]);
  const { handleSubmit, setValue, getValues, control } = useForm<MangaFilter>()

  const onSubmit = (formData: MangaFilter) => {
    onSubmitFilter(formData);
  };

  const handleFormClear = () => {
    setValue("genre", null);
  };

  const handleChangeCategory = (value: Genres) => {
    setValue("genre", value);
    const obj: MangaFilter = {
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
      <form onSubmit={handleSubmit(onSubmit)} className="product-filter mb-4">
        <div className="product-filter-botton-container">
          <div className="product-filter-category-container row d-flex">
            <div className="col-12 col-md-9">
              <Controller
                name="genre"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={generos}
                    isClearable
                    placeholder="Genero"
                    classNamePrefix="manga-filter-select"
                    onChange={(value) => handleChangeCategory(value as Genres)}
                    getOptionLabel={(genre: Genres) => genre.name}
                    getOptionValue={(genre: Genres) => String(genre.mal_id)}
                  />
                )}
              />
            </div>
            <div className="col-12 col-md-3 button_filter ">
              <button
                onClick={handleFormClear}
                className="btn btn-outline-primary btn-product-filter-clear">
                Limpar<span className="btn-product-filter-word">Filtro</span>{" "}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Filter;