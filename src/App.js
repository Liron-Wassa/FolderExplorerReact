import Folders from "./components/Folders/Folders";
import { Tree } from "./dataStructure/tree";
import { entities } from "./json/entities";

const convertedIdsToEntities = entities.map(entity => entity.id.split(/[\s:]+/));
const tree = new Tree(convertedIdsToEntities[0][0]);

fillTreeWithEntities();

function fillTreeWithEntities() {
  for (let i = 0; i < convertedIdsToEntities.length; i++) {
    const idEntities = convertedIdsToEntities[i];
  
    for (let j = 1; j < idEntities.length; j++) {
      const leftIdEntity = idEntities[j - 1];
      const rightIdEntity = idEntities[j];
      
      tree.insert(leftIdEntity, rightIdEntity);
    };  
  };
};

const App = () => {
  return (
    <>
      <h1>Folder Explorer</h1>

      <Folders rootFolder={tree.root} />
    </>
  );
};

export default App;