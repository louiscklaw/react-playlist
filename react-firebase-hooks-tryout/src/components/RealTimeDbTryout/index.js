import React from 'react'
import { ref, getDatabase } from 'firebase/database'
import { useList } from 'react-firebase-hooks/database'

export default function RealTimeDbTryout({ firebaseApp }) {
  const database = getDatabase(firebaseApp)
  console.log({ database })
  const [snapshots, loading, error] = useList(ref(database, 'helloworld'))

  return (
    <>
      RealTimeDbTryout
      <div>
        <p>
          {error && <strong>Error: {error}</strong>}
          {loading && <span>List: Loading...</span>}
          {!loading && snapshots && (
            <React.Fragment>
              <span>
                List:{' '}
                {snapshots.map(v => (
                  <React.Fragment key={v.key}>{v.val()}, </React.Fragment>
                ))}
              </span>
            </React.Fragment>
          )}
        </p>
      </div>
    </>
  )
}
