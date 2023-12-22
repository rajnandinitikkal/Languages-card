import languageconfig from './language.json'

const I18n = (keyword,placeholder,value)=>{
    const language = localStorage.getItem("language") || "en";

    const text = languageconfig[language][keyword]

    if(placeholder && value){
        return text.replace(placeholder,value);
    }
    return text;
}

export default I18n;