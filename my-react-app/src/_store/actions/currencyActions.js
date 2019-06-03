
//Actions: functions -> returns dispatcher object
//dispatcher: type & addtional arguments

const UPDATE_CURRENCY = 'UPDATE_CURRENCY';

const updateCurrency = (code) => ({
    type: 'UPDATE_CURRENCY',
    code
});

export { updateCurrency, UPDATE_CURRENCY }