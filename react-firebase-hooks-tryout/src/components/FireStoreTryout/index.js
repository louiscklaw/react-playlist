import React from 'react'
import { getFirestore, collection } from 'firebase/firestore'
import { useCollection, useCollectionOnce } from 'react-firebase-hooks/firestore'

export default function FireStoreTryout({ firebaseApp }) {
  const [value, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), 'helloworld_table'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  )

  const [snapshot_collection_once, loading_collection_once, error_collection_once] =
    useCollectionOnce(collection(getFirestore(firebaseApp), 'helloworld_table'), {
      snapshotListenOptions: { includeMetadataChanges: true },
    })

  return (
    <>
      <div>FireStoreTryout</div>

      <div>
        <div>collection</div>
        <pre>
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <span>Collection: Loading...</span>}
          {value && (
            <span>
              {value.docs.map(doc => {
                let extracted_data = doc.data()
                return (
                  <div key={doc.id}>
                    {JSON.stringify(
                      { hello: extracted_data.hello, anotherField: extracted_data.anotherField },
                      null,
                      2,
                    )}
                  </div>
                )
              })}
            </span>
          )}
        </pre>
      </div>
      <div>
        <div>collection</div>
        <pre>
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <span>Collection: Loading...</span>}
          {value && (
            <span>
              {value.docs.map(doc => {
                let extracted_data = doc.data()
                return (
                  <div key={doc.id}>
                    {JSON.stringify(
                      { hello: extracted_data.column1, anotherField: extracted_data.column2 },
                      null,
                      2,
                    )}
                  </div>
                )
              })}
            </span>
          )}
        </pre>
      </div>
    </>
  )
}
