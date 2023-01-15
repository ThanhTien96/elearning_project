
// cat bot chu noi dung
export const truncateText = (text, leg) => {
    if(text.length > leg) {
        return text.substr(0, leg) + '...'
    } else {
        return text;
    }
};

// ma nhom

export const maNhom = 'GP01'