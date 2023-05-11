import { SupabaseClient, Session, User } from '@supabase/supabase-js'
export type AuthSession = {
  user: User | null
  session: Session | null
}
export type Props = {
  wesbittyOauth: SupabaseClient
  [propName: string]: any
}
export declare const UserContextProvider: (
  props: Props
) => import('react/jsx-runtime').JSX.Element
export declare const useUser: () => AuthSession
