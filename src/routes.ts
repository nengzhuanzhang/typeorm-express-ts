import { addUser, deleteUser, editUser, getUsers } from './controller/UserAllAction'

export const AppRoutes = [
  {
    path: '/user',
    method: 'get',
    action: getUsers
  },
  {
    path: '/user/add',
    method: 'post',
    action: addUser
  },
  {
    path: '/user/edit',
    method: 'put',
    action: editUser
  },
  {
    path: '/user/delete/:id',
    method: 'delete',
    action: deleteUser
  }
]