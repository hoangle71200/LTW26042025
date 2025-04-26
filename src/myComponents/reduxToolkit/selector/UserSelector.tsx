import { useSelector } from 'react-redux'


export default function UserSelector () {
  // @ts-ignore
  return useSelector((state) => state.user)
}