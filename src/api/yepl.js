import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer GHylw-JiZe_80dw6HlnWd04f_HXnd3CZjRq3vaeNGJdtP59DlnK4Pm7l9UCE6s0A3woVFna91hoydB5-_BMny2PxWIpk-DM1dKZSUnv5aX4bhOPySNeAlkHlipOBX3Yx'
    }
})