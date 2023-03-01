import { useState } from "react";
import {
  buttonWraper,
  inputStyle,
  styleCross,
  styleWindow,
  styleWrapper,
} from "./style";

type Props = {
  open: boolean;
  isCreate: boolean;
  isDeleting: boolean;
  onClose: () => void;
  ditails: { name: string; id: number };
  addChildren: ({
    parentNodeId,
    nodeName,
  }: {
    parentNodeId: number;
    nodeName: string;
  }) => void;
  deleteChildren: ({ nodeId }: { nodeId: number }) => void;
};

export const ShowMore = ({
  open,
  onClose,
  ditails,
  isCreate,
  isDeleting,
  addChildren,
  deleteChildren,
}: Props) => {
  const [childName, setChildName] = useState<string>("");
  const { name, id } = ditails ?? {};

  return (
    <div style={{ ...styleWrapper, display: open ? "block" : "none" }}>
      <span style={styleCross} onClick={onClose}>
        &#10007;
      </span>
      <div style={styleWindow}>
        <div style={{ paddingBottom: "10px" }}>{name}</div>
        <input
          style={inputStyle}
          value={childName}
          placeholder="Please add children name"
          onChange={(e) => setChildName(e.currentTarget.value)}
        />

        <div style={buttonWraper}>
          <button onClick={() => deleteChildren({ nodeId: id })}>
            {isDeleting ? "processing..." : "Delete name"}
          </button>
          <button
            disabled={!childName}
            onClick={() => {
              addChildren({ parentNodeId: id, nodeName: childName });
              setChildName("");
            }}
          >
            {isCreate ? "processing..." : "Add children"}
          </button>
        </div>
      </div>
    </div>
  );
};
