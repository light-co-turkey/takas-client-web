import _ from 'lodash';
import Constants from './constants';

export const updateObject = (oldObject, updatedProperties) => (
  {
    ...oldObject,
    ...updatedProperties,
  }
);

export const getErrorMessage = (payload) => {
  if (payload && payload.response && payload.response.data && payload.response.data.message) {
    if (typeof payload.response.data.message === 'string') {
      return {
        tr: payload.response.data.message,
        en: payload.response.data.message,
      };
    }
    return payload.response.data.message;
  }
  if (payload.error && payload.error.response && payload.error.response.data && payload.error.response.data.message) {
    if (typeof payload.error.response.data.message === 'string') {
      return {
        tr: payload.error.response.data.message,
        en: payload.error.response.data.message,
      };
    }
    return payload.error.response.data.message;
  }
  return {
    tr: 'Bilinmeyen Hata !',
    en: 'Something Went Wrong !',
  };
};

export const canAccess = (allowed, roles) => {
  let accessible = true;
  if (allowed) {
    const roleSet = new Set(roles);
    const allowedRoleSet = new Set(allowed);
    const intersection = new Set(
      [...roleSet].filter(x => allowedRoleSet.has(x)),
    );
    accessible = intersection.size > 0;
  }
  return accessible;
};

export const getRoles = (profile, restaurants, restaurantId) => {
  const roles = [];
  if (profile.isAdmin) {
    roles.push(Constants.USER_ROLES.SUPER_USER);
  }
  const currentRestaurant = _.find(restaurants, ['restaurant', restaurantId]);
  if (currentRestaurant) {
    roles.push(currentRestaurant.role);
  }
  return roles;
};

export const isNullOrEmpty = (param) => {
  let variable = param;
  if (typeof variable === 'string') {
    variable = variable.trim();
  }
  return !(typeof variable !== 'undefined' && variable !== null && variable !== '');
};

export const isEmptyOrEmptyString = s => (_.isString(s) ? _.trim(s) === '' : _.isEmpty(s));

export const extractRestaurantIdFromPathname = (pathname) => {
  let restaurantId = null;
  const regex = /r\/(.[^/]+)\//;

  if (regex.exec(pathname)) {
    [, restaurantId] = regex.exec(pathname);
  }

  return restaurantId;
};

export default null;
