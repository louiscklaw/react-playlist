import React from 'react'
import { ref, getStorage } from 'firebase/storage'
import { useDownloadURL } from 'react-firebase-hooks/storage'

export default function CloudStorage({ firebaseApp }) {
  const storage = getStorage(firebaseApp)

  const [value, loading, error] = useDownloadURL(
    ref(storage, 'gs://helloworld-b29f6.appspot.com/aarn-giri-3tYZjGSBwbk-unsplash.jpg'),
  )

  return (
    <>
      <div>CloudStorage</div>
      <div>
        <p>
          {error && <strong>Error: {error}</strong>}
          {loading && <span>Download URL: Loading...</span>}
          {!loading && value && (
            <React.Fragment>
              <span>Download URL: {value}</span>
            </React.Fragment>
          )}
          <div
            style={{
              height: '100px',
              width: '100px',
              backgroundImage: `url("${value}")`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        </p>
      </div>
    </>
  )
}
