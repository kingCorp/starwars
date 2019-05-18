import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE } from './constant';
import axios from 'axios';

export function fetchPeopleFromAPI() {
    return(dispatch) => {
        dispatch(getPeople())
        axios.get('https://swapi.co/api/people/')
        .then(res => dispatch(getPeopleSuccess(res.data.results)))
        .catch(err => {dispatch(getPeopleFailure(err)); console.log(err)})
    }
}



function getPeople(){
    return{
        type: FETCHING_PEOPLE
    }
}

function getPeopleSuccess(data) {
    return {
        type: FETCHING_PEOPLE_SUCCESS,
        data
    }
}

function getPeopleFailure(err){
    return{
        type: FETCHING_PEOPLE_FAILURE,
        err
    }
}
