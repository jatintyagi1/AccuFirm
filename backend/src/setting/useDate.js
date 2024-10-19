const useDate = ({ settings }) => {
    const { accuFirm_app_date_format } = settings;

    const dateFormat = accuFirm_app_date_format;

    return {
        dateFormat,
    };
};

module.exports = useDate;