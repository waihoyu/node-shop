/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-10-22 11:31:18
 *@version: V1.0.5
*/

let BASEURL = '';
const LOCALURL = 'http://localhost:3000';

const URL = {
    getShopingMallInfo: BASEURL + 'index' ,
    getGoodsInfo : BASEURL + 'getGoodsInfo' ,
    registerUser: LOCALURL +  '/user/register'
};

module.exports = URL;
