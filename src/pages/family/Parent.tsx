import Family from "./components/Family";
import { ShowMore } from "./components/ShowMore";
import { useFamily } from "./hooks/useFamily";

const Parent = () => {
  const {
    tree,
    isLoadingTree,
    addChildren,
    deleteChildren,
    open,
    showDitails,
    onClose,
    ditails,
    isCreate,
    isDeleting,
  } = useFamily();

  if (isLoadingTree) return <>Loading...</>;

  return (
    <>
      <Family familyTree={tree} showDitails={showDitails} />
      <ShowMore
        open={open}
        isCreate={isCreate}
        isDeleting={isDeleting}
        onClose={onClose}
        ditails={ditails}
        addChildren={addChildren}
        deleteChildren={deleteChildren}
      />
    </>
  );
};

export default Parent;
