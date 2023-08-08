import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function FileUploadDummyTest() {


const formData = new FormData();

formData.append('photoFromFront', {
  uri: 'file://...',
  name: 'photo.jpg',
  type: 'image/jpeg',
 });
 
//  fetch('http://localhost:3000/events/upload', {
//   method: 'POST',
//   body: formData,
//  }).then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//  });

  return (
    <div>
      <h1>FILE UPLOAD TEST</h1>
      <form>
          <span>Choisir un fichier</span>
          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
      </form>
    </div>
  );
}

export default FileUploadDummyTest;
