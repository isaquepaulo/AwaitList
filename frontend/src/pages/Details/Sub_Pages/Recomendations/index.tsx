import SlideSecondary from 'components/SlideSecondary';
import { useParams } from 'react-router-dom';
import { getRecommendationsAPI } from 'store/recomendationsContent';
import './styles.css'

const Recomendations = () => {
    const params = useParams();



    return (
        <div className="div_Slide_home">
            <SlideSecondary api={getRecommendationsAPI(params.id)} title={""} key={""} />
        </div>
    )
}

export default Recomendations;

