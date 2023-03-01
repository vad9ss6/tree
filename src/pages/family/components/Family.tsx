import { TreeDTO } from "../../../shared";

type Props = {
  familyTree: TreeDTO;
  showDitails: (data: { name: string; id: number }) => void;
};

const Family = ({ familyTree, showDitails }: Props) => {
  return (
    <div style={{ paddingLeft: 10 }}>
      <div style={{ paddingBottom: 10 }}>
        <span style={{ paddingRight: 10 }}>{familyTree?.name}</span>

        <button
          onClick={() =>
            showDitails({ name: familyTree.name, id: familyTree.id })
          }
        >
          show more
        </button>
      </div>

      {familyTree?.children?.map((child) => {
        return (
          <div key={child.id} style={{ paddingLeft: 10 }}>
            <Family
              familyTree={child as unknown as TreeDTO}
              showDitails={showDitails}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Family;
