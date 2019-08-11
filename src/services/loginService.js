export const isLogged = () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if(token && token !== '') {
        return true;
    }
    return false;
}