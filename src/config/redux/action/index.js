export const actionUserName = () => (dispatch) => {
    setTimeout(()=> {
        return  dispatch ({type: 'CHANGE_USER', value: 'Martin Lumbangaol'})
    }, 2000)
}