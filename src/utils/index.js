export const formatDate = (date) => {
    if (!date) return null;

    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`
};

// eslint-disable-next-line no-useless-escape
export const phoneRegex = /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/;
