import UserModel from '@/data/models/user-model'
export async function getUsers(){
  console.log('///',UserModel)
  return UserModel
}
export async function hasUser(username,password){
  let user =  UserModel.filter(user => user.username == username && user.password == password)
  if(user.length > 0) return true
  return false

}

