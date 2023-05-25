const errorType = {
  ACCESS_DENIED: 'ACCESS_DENIED',
}

const statusHTTP = {
  ACCESS_DENIED: 403,
}

const errorMap = (typeError) => statusHTTP[typeError] || 500;

module.exports = {
  errorType,
  errorMap,
};