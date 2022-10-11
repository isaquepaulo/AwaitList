import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import Select from "react-select";
import "./styles.css"
import { MinScore, Status, Type } from 'types/filterFind';

export type FilterFind = {
  type: Type | null;
  minScore: MinScore | null;
  status: Status | null;
};

type Props = {
  onSubmitFilter: (data: FilterFind) => void
}
function Filter({ onSubmitFilter }: Props) {
  const [type, setType] = useState<Type[]>([]);
  const [minScore, setMinScore] = useState<MinScore[]>([]);
  const [status, setStatus] = useState<Status[]>([]);

  const { handleSubmit, setValue, getValues, control } = useForm<FilterFind>()

  const onSubmit = (formData: FilterFind) => {
    onSubmitFilter(formData);
  };
  const handleFormClear = () => {
    setValue("type", null);
    setValue("minScore", null);
    setValue("status", null);
  };
  const handleChangeType = (value: Type) => {
    setValue("type", value);

    const obj: FilterFind = {
      type: getValues("type"),
      minScore: getValues("minScore"),
      status: getValues("status")
    };
    onSubmitFilter(obj);
  };
  const handleChangeMinScore = (value: MinScore) => {
    setValue("minScore", value);
    const obj: FilterFind = {
      minScore: getValues("minScore"),
      status: getValues("status"),
      type: getValues("type"),

    };
    onSubmitFilter(obj);
  };
  const handleChangeStatus = (value: Status) => {
    setValue("status", value);

    const obj: FilterFind = {
      status: getValues("status"),
      type: getValues("type"),
      minScore: getValues("minScore")
    };
    onSubmitFilter(obj);
  };

  const typeArray = [
    {
      name: "manga",
    },
    {
      name: "novel",
    },
    {
      name: "lightnovel",
    },
    {
      name: "oneshot",
    },
    {
      name: "doujin",
    },
    {
      name: "manhwa",
    },
    {
      name: "manhua",
    },
  ];

  const statusArray = [
    {
      status: "publishing",
    },
    {
      status: "complete",
    },
    {
      status: "hiatus",
    },
    {
      status: "discontinued",
    },
    {
      status: "upcoming",
    },
  ];

  const minScoreArray = [
    {
      score: "9.5",
    },
    {
      score: "9.0",
    },
    {
      score: "8.5",
    },
    {
      score: "8.0",
    },
    {
      score: "7.5",
    },
    {
      score: "7.0",
    },
    {
      score: "6.5",
    },
    {
      score: "5.5",
    },
    {
      score: "5.0",
    },
    {
      score: "4.5",
    },
  ];

  useEffect(() => {
    setType(typeArray);
    setMinScore(minScoreArray);
    setStatus(statusArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <div className="row">
        <div className="col-12 mt-3 col-md-4">
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={type}
                isClearable
                placeholder="Tipo"
                classNamePrefix="manga-filter-select"
                onChange={(value) => handleChangeType(value as Type)}
                getOptionLabel={(type: Type) => type.name}
                getOptionValue={(type: Type) => String(type.name)}
              />
            )}
          />
        </div>
        <div className="col-12 mt-3 col-md-4">
          <Controller
            name="minScore"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={minScore}
                isClearable
                placeholder="MinScore"
                classNamePrefix="manga-filter-select"
                onChange={(value) => handleChangeMinScore(value as MinScore)}
                getOptionLabel={(minScore: MinScore) => minScore.score}
                getOptionValue={(minScore: MinScore) => String(minScore.score)}
              />
            )}
          />
        </div>
        <div className="col-12 mt-3 col-md-4">
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={status}
                isClearable
                placeholder="status"
                classNamePrefix="manga-filter-select"
                onChange={(value) => handleChangeStatus(value as Status)}
                getOptionLabel={(status: Status) => status.status}
                getOptionValue={(status: Status) => String(status.status)}
              />
            )}
          />
        </div>
      </div>
      <button
        onClick={handleFormClear}
        className="btn btn-outline-primary mt-3"
      >
        Limpar<span className="">Filtro</span>{" "}
      </button>
    </form>
  )
}

export default Filter;