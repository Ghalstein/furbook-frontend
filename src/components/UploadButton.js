import ActiveStorageProvider from 'react-activestorage-provider';
import React from 'react';

class UploadButton extends React.Component {
	render = () => {
		return (
		  <ActiveStorageProvider
		    endpoint={{
		      path: '/rails_direct_uploads_path',
		      model: 'Photo',
		      attribute: 'picture',
		      method: 'POST',
		    }}
		    onSubmit={photo => this.setState({ picture: photo.picture })}
		    render={({ handleUpload, uploads, ready }) => (
		      <div>
		        <input
		          type="file"
		          disabled={!ready}
		          onChange={e => handleUpload(e.currentTarget.files)}
		        />

		        {uploads.map(upload => {
		          switch (upload.state) {
		            case 'waiting':
		              return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
		            case 'uploading':
		              return (
		                <p key={upload.id}>
		                  Uploading {upload.file.name}: {upload.progress}%
		                </p>
		              )
		            case 'error':
		              return (
		                <p key={upload.id}>
		                  Error uploading {upload.file.name}: {upload.error}
		                </p>
		              )
		            case 'finished':
		              return (
		                <p key={upload.id}>Finished uploading {upload.file.name}</p>
		              )
		          }
		        })}
		      </div>
		    )}
		  />
		)
	}
}

export default UploadButton;