import axios from 'axios';

// const USER_API_URL = "http://localhost:8888/shop1ForReact";
// const USER_API_URL = "http://testtatsiana.vphs.top/back_php";
const USER_API_URL = "https://juniortesttatsianayurchyk.000webhostapp.com/back_php";
// // const USER_API_URL = "http://tatsianayurchyktest.liveblog365.com/back_php";

// // const USER_API_URL = "https://tatsianayurchik.great-site.net/back_php";
// // const USER_API_URL = "http://tatsianayurchyktest.iceiy.com//back_php";

class UserService {

    getProducts(){
        return axios.get(`${USER_API_URL}/read.php`);
    }
 
    getCategories(){
        return axios.get(`${USER_API_URL}/read_category.php`);
    }

    createProduct(product){
        return axios.post(`${USER_API_URL}/create.php`,product);
    }

    // hosting on 000webhost where methods DELETE and PUT do not work(available with the Pro Plan)

    deleteProduct(item){  
        return axios.post(`${USER_API_URL}/delete.php`,item);
    }

}
export default new UserService()