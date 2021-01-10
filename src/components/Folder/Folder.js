import { useState } from 'react';

const Folder = ({ folderName }) => {

    const [isFolderOpen, setIsFolderOpen] = useState(false);

    let folderClass = 'close';

    let folderIcon = <i className="far fa-folder" />;
  
    if(isFolderOpen) {
        folderClass = 'open';
        folderIcon = <i className="far fa-folder-open" />;
    };

    return (
        <li
            className={folderClass}
            onClick={() => setIsFolderOpen(isFolderOpen => !isFolderOpen)}
        >
            {folderIcon}
            <span>{folderName}</span>
        </li>
    );
};

export default Folder;