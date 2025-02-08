import React, { useState , useId} from 'react';
import cn from 'classnames';
import './UploadDataPage.css';

function UploadData (props){

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (file) {

            const formData = new FormData();
            formData.append('file', file);
            try {
                const result = await fetch('./upload', {
                    method: 'POST',
                    body: formData,
            });

            const data = await result.json();
            console.log(data);
            } catch (error) {
                console.error(error);
            }
        }
    };
    const id = useId();
    return (
        <div>
            <div>
                <label className={'label'} htmlFor={id}>
                    <div>Выберете файл</div>{file && <div>{file.name}</div>}
                    <input id={id} className={'fileInput'} type="file" onChange={handleFileChange} />
                </label>
            </div>
            <button
                onClick={handleUpload}
                className="submit"
            >Загрузить файл</button>
        </div>
    )
}

export default UploadData;
