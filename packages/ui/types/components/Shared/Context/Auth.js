var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
import { jsx as _jsx } from 'react/jsx-runtime'
import { useEffect, useState, createContext, useContext } from 'react'
const UserContext = createContext({ user: null, session: null })
export const UserContextProvider = (props) => {
  var _a
  const { wesbittyOauth } = props
  const [session, setSession] = useState(wesbittyOauth.auth.session())
  const [user, setUser] = useState(
    (_a = session === null || session === void 0 ? void 0 : session.user) !==
      null && _a !== void 0
      ? _a
      : null
  )
  useEffect(() => {
    const { data: authListener } = wesbittyOauth.auth.onAuthStateChange(
      (event, session) =>
        __awaiter(void 0, void 0, void 0, function* () {
          var _a
          setSession(session)
          setUser(
            (_a =
              session === null || session === void 0
                ? void 0
                : session.user) !== null && _a !== void 0
              ? _a
              : null
          )
        })
    )
    return () => {
      authListener === null || authListener === void 0
        ? void 0
        : authListener.unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const value = {
    session,
    user,
  }
  return _jsx(UserContext.Provider, Object.assign({ value: value }, props))
}
export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`)
  }
  return context
}
