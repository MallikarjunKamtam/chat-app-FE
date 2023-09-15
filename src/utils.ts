export const getToken = (): string => {

    const token = 'Bearer ' + localStorage.getItem('chat_app_token')
    return token

}


export const scrollTopAction = () => {
    window.scroll({ top: 0, behavior: "smooth" });
};