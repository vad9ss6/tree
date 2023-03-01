import { useState } from "react";
import UserService from "App/api/services/user/user.services";
import { useApiMutation, useApiQuery, useToggle } from "hooks";
import { useToasts } from "react-toast-notifications";
import { TreeDTO } from "shared";

const TREE_NAME = "Bob";

export const useFamily = () => {
  const [ditails, setDitails] = useState<any>(null);

  const { open, onClose, onOpen } = useToggle();
  const { addToast } = useToasts();
  const {
    data: tree,
    isLoading: isLoadingTree,
    refetch,
  } = useApiQuery(["user"], () => UserService.getCollection(TREE_NAME));

  const { mutate: create, isLoading: isCreate } = useApiMutation(
    ["user"],
    UserService.create,
    {
      onSuccess: () => {
        refetch();
        onClose();
      },
      onError: (e: any) => addToast(e.response.data.data.message),
    }
  );

  const { mutate: del, isLoading: isDeleting } = useApiMutation(
    ["user"],
    UserService.delete,
    {
      onSuccess: () => {
        refetch();
        onClose();
      },
      onError: (e: any) => addToast(e.response.data.data.message),
    }
  );

  const addChildren = ({
    parentNodeId,
    nodeName,
  }: {
    parentNodeId: number;
    nodeName: string;
  }) => {
    create({ treeName: TREE_NAME, parentNodeId, nodeName });
  };

  const deleteChildren = ({ nodeId }: { nodeId: number }) => {
    del({ treeName: TREE_NAME, nodeId });
  };

  const showDitails = (data: { name: string; id: number }) => {
    setDitails(data);
    onOpen();
  };

  return {
    tree: tree as TreeDTO,
    isLoadingTree,
    addChildren,
    deleteChildren,
    ditails,
    showDitails,
    onClose,
    open,
    isDeleting,
    isCreate,
  };
};
