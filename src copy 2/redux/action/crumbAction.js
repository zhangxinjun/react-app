import { ADDCRUMB, DELETECRUMB } from './actionType'

export const crumbAction = data => ({ type: ADDCRUMB, data })
export const deleteCrumAction = data => ({ type: DELETECRUMB, data })