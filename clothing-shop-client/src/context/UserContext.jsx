import { createContext, useState } from "react"

export const UserData = createContext({})

function UserContext({ children }) {
  const [user, setUser] = useState(null)

  return (
    <UserData.Provider value={{ user, setUser }}>
      {children}
    </UserData.Provider>
  )
}

export default UserContext