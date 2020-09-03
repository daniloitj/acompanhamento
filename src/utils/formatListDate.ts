import {ExpendFormat} from '../interfaces/Expend';

const formatListDate = (listDate: ExpendFormat[]): ExpendFormat[] => {
    const groups = listDate.reduce((groups, item) => {
        const date = item.date.split('T')[0];
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(item);
        return groups;
    }, {});
    const groupArrays: ExpendFormat[] = Object.keys(groups).map((date) => {
        return {
            date,
            expends: groups[date],
        };
    });

    return groupArrays as ExpendFormat[];
};

export default formatListDate;
