const errorMessage = {
  ACCESS_DENIED: 'Access denied.',
  PHONE_NOT_FOUND: 'Phone not found.'
};

const errorType = {
  ACCESS_DENIED: 'ACCESS_DENIED',
  PHONE_NOT_FOUND: 'PHONE_NOT_FOUND'
};

const statusHTTP = {
  ACCESS_DENIED: 403,
  PHONE_NOT_FOUND: 404
};

const errorMap = (typeError) => statusHTTP[typeError] || 500

module.exports = {
  errorMessage,
  errorType,
  errorMap
}