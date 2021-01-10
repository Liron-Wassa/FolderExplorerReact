import Folders from "./components/Folders/Folders";
import { Tree } from "./dataStructure/tree";
import { entities } from "./json/entities";

const filteredEntities = entities.map((entity) => entity.id.split(/[\s:]+/));

const tree = new Tree(filteredEntities[0][0]);

fillTreeWithEntities();

function fillTreeWithEntities() {
  for (let i = 0; i < filteredEntities.length; i++) {
    const idEntities = filteredEntities[i];

    for (let j = 1; j < idEntities.length; j++) {
      const leftIdEntity = idEntities[j - 1];
      const rightIdEntity = idEntities[j];

      tree.insert(rightIdEntity, leftIdEntity);
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