import Folder from "../Folder/Folder";
import { v4 as uuidv4 } from 'uuid';
import { Fragment } from "react";

const Folders = ({ subFolders, rootFolder }) => {
  if (rootFolder) {
    return (
      <ul className="folder">
        <Fragment>
          <Folder folderName={rootFolder.name} />

          <Folders subFolders={rootFolder.childrens} />
        </Fragment>
      </ul>
    );
  };

  return (
    <ul className="folder">
      {subFolders.map((folder) => (
        <Fragment key={uuidv4()}>
          <Folder folderName={folder.name} />

          {folder.childrens.length ? (
            <Folders subFolders={folder.childrens} />
          ) : null}
        </Fragment>
      ))}
    </ul>
  );
};

Folders.defaultProps = {
  rootFolder: null,
  subFolders: [],
};

export default Folders;