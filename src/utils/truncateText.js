
// cat bot chu noi dung
export const truncateText = (text, ele) => {
    if(text && text.length > ele){
        return text.substr(0, ele) + '...';
    }else{
        return text;
    }
};

// ma nhom

export const maNhom = 'GP01'
