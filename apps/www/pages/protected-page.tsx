import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useUser } from '@auth0/nextjs-auth0/client'

import DefaultLayout from '../components/Layouts/Default'

export default function ProtectedPage() {
  const { user, error, isLoading } = useUser()

  return (
    <DefaultLayout>
      <h1>Protected Page</h1>

      {isLoading && <p>Loading profile...</p>}

      {error && (
        <>
          <h4>Error</h4>
          <pre>{error.message}</pre>
        </>
      )}

      {user && (
        <>
          <h4>Profile</h4>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </DefaultLayout>
  )
}

export const getServerSideProps = withPageAuthRequired()
