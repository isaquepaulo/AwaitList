import "./styles.css";

type Props = {
  manga: any

};
const CardMangaHome = ({ manga }: Props) => {
  return (
    <div className="card container_CardMangaHome" >
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <div className="divv">
        <img
          src={manga.entry.images.webp.image_url}
          alt=""
          className=" img_CardMangaHome"
        />
        <div className="card-img-overlay d-flex align-items-end">
          <div className="div_title_CardMangaHome">
            <h5 className="title_CardMangaHome text-center">{manga.entry.title}</h5>
          </div>
        </div>

      </div>
    </div>

  )


};

export default CardMangaHome;
