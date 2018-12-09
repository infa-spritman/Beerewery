import axios from 'axios';
const API_URL = "http://localhost:4000";

export default class BeerServices{

    static createBeer = Beer => {
        return axios.post(API_URL + "/api/beer", Beer, {withCredentials: true}).then((res) => res.data)
    };

    static findCommentsForBeerId = beerId => {
        return axios.get(API_URL + "/api/beer/" + beerId + "/comment", {withCredentials: true}).then((res) => res.data)
    };

    static addCommentForBeerId = (comment, userId, beerId) => {
        console.log(comment + "," + userId + "," + beerId)
        let commentJson = {
            comment: comment
        };
        return axios.post(API_URL + "/api/user/" + userId + "/beer/" + beerId + "/comment", commentJson, {withCredentials: true}).then((res) => res.data)
    }
}