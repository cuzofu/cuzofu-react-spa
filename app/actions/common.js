import { common } from '../api';
import { createAjaxAction } from '../utils';

export const fetchLogin = createAjaxAction(common.login);
export const fetchRegister = createAjaxAction(common.register);
export const userInfo = createAjaxAction(common.userInfo);
