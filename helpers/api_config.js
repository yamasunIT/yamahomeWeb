const development_ip = 'http://192.168.50.30';
const profuction_ip = '';
const production_env = false;
export const baseURL = production_env ? profuction_ip : development_ip;