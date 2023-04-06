import { Request, Response } from 'express'
import { AppDataSource } from "../data-source"
import { User } from '../entity/User'

export async function getUsers(req: Request, res: Response) {
  const users = await AppDataSource.getRepository(User).find()
  if (users) {
    res.send({
      status: 200,
      msg: 'query success',
      data: users
    })
  } else {
    res.send({
      status: 500,
      msg: 'query failed'
    })
    throw new Error('query error')
  }

}

export async function addUser(req: Request, res: Response) {
  const newUser = await AppDataSource.getRepository(User).save(req.body)
  if (newUser) {
    res.send({
      status: 200,
      msg: 'add success',
      data: newUser
    })
  } else {
    res.send({
      status: 500,
      msg: 'add failed'
    })
    throw new Error('add error')
  }

}

export async function editUser(req: Request, res: Response) {
  let user = await AppDataSource.getRepository(User).find({
    where: {
      id: req.body.id,
    }
  })
  if (user) {
    user = { user, ...req.body }
    await AppDataSource.getRepository(User).save(user)
    res.send({
      status: 200,
      msg: 'success',
      data: user
    })
  } else {
    res.send({
      status: 500,
      msg: 'edit failed,this user does not exist'
    })
    throw new Error('edit error,this user does not exist')
  }

}

export async function deleteUser(req: Request, res: Response) {
  const user = await AppDataSource.getRepository(User).find({
    where: {
      id: req.params.id,
    }
  })

  if (user) {
    await AppDataSource.getRepository(User).remove(user)
    res.send({
      status: 200,
      msg: 'success',
    })
  } else {
    res.send({
      status: 500,
      msg: 'delete failed,this user does not exist'
    })
    throw new Error('delete error,this user does not exist')
  }

}